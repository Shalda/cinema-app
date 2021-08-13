import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model';
import { environment } from 'src/environments/environment';
import { imdbId } from 'src/app/common/imdbId';
import { Subject, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinemaDatasourceService {
  private dBUrl: string = environment.apiUrl;
  private dBKey: string = environment.apiKey;
  private imdbId: string[] = imdbId;
  private movies: Movie[] = [];
  private movieUpdated = new Subject<{ data: Movie[]; count: number }>();
  private isLoading = new Subject<boolean>();

  constructor(private _http: HttpClient) {}

  public getMovieListener() {
    return this.movieUpdated.asObservable();
  }
  public getLoadingListener() {
    return this.isLoading.asObservable();
  }

  public movieTransform(count: number) {
    this.isLoading.next(false);
    this.movieUpdated.next({
      data: [...this.movies],
      count: count,
    });
  }
  public getMoviesKey(currentpage: number, moviesPerPage: number) {
    const from = currentpage * moviesPerPage;
    const to = from + moviesPerPage;
    const keyArray = this.imdbId.slice(from, to);
    return {
      key: keyArray,
      countKey: this.imdbId.length,
    };
  }

  public fetchMovies(currentpage: number = 0, moviesPerPage: number = 12) {
    const keyArray: { key: string[]; countKey: number } = this.getMoviesKey(
      currentpage,
      moviesPerPage
    );
    this.isLoading.next(true);
    const moviesReqArray = keyArray.key.map((id) => {
      return this._http.get<Movie>(
        `${this.dBUrl}${this.dBKey}&i=${id}&plot=full`
      );
    });
    zip<Movie[]>(...moviesReqArray).subscribe((data) => {
      this.movies = data;
      setTimeout(() => {
        this.movieTransform(keyArray.countKey);
      }, 1000);
    });
  }
  public searchMovie(text: string) {
    if (text == '') this.fetchMovies();
    this.isLoading.next(true);
    return this._http
      .get<{ Search: Movie[] }>(
        `${this.dBUrl}${this.dBKey}&s=${text}&plot=full`
      )
      .subscribe(
        (movies) => {
          if (movies.Search && movies.Search.length) {
            this.movies = movies.Search;
            this.movieTransform(movies.Search.length);
          }
        },
        (err) => console.log('HTTP Error', err)
      );
  }

  // public getMovie(id: string) {
  //   const params = `${this.dBKey}&i=${id}&plot=full`;
  //   this._http.get<Movie>(this.dBUrl + params)
  //     .subscribe(data => {
  //       this.movie = data;
  //       this.movieUpdated.next({...this.movie})
  //     })
  // }
}
