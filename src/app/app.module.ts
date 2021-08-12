import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CinemaListComponent } from './content/cinema-list.component';
import {HttpClientModule} from '@angular/common/http';
import { RestDataSourceService } from './common/rest.datasource.service';
import { CinemaRepositoryService } from './common/cinema.repository.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CinemaListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [RestDataSourceService, CinemaRepositoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
