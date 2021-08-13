import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CinemaDatasourceService } from '../common/cinema.datasource.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  public searchTextChanged = new Subject();
  private inputSubscr: Subscription;
  constructor(private _movieService: CinemaDatasourceService) {
    this.inputSubscr = this.searchTextChanged
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((text) => {
        this._movieService.searchMovie(text as string);
      });
  }
  public changed(text: string) {
    this.searchTextChanged.next(text);
  }

  ngOnDestroy(): void {
    this.inputSubscr.unsubscribe();
  }
}
