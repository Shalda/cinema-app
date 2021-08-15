import {Component, OnDestroy, OnInit} from '@angular/core';
import {CinemaDatasourceService} from '../../common/cinema.datasource.service';
import {Movie} from '../../common/model';
import {Subscription} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss'],
})
export class CinemaListComponent implements OnInit, OnDestroy {
  public movie: Movie = {};
  public movies: Movie[] = [];
  public movieSub: Subscription;
  public totalMovies: number = 0;
  public moviesPerPage: number = 8;
  public pageSizeOptions: number[] = [8, 12, 16];
  public currentPage: number = 0;
  public isLoading!: boolean;
  public isLoadingSub: Subscription;
  public addMode: boolean = false;

  constructor(private _movieService: CinemaDatasourceService) {
    this.movieSub = this._movieService
      .getMovieListener()
      .subscribe((movies) => {
        this.movies = movies.data;
        this.totalMovies = movies.count;
      });
    this.isLoadingSub = this._movieService
      .getLoadingListener()
      .subscribe((val) => (this.isLoading = val));
  }

  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex;
    this.moviesPerPage = pageData.pageSize;
    this._movieService.fetchMovies(this.currentPage, this.moviesPerPage);
  }

  ngOnInit(): void {
    this._movieService.fetchMovies(this.currentPage, this.moviesPerPage);
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }
}
