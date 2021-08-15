import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CinemaListComponent } from './content/cinema-list/cinema-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CinemaDatasourceService } from './common/cinema.datasource.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MovieTitlePipe } from './common/movie-title.pipe';
import { AddNewMovieComponent } from './content/cinema-list/add-new-movie/add-new-movie.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, CinemaListComponent, MovieTitlePipe, AddNewMovieComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [CinemaDatasourceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
