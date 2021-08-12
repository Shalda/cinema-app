import { Component, OnInit } from '@angular/core';
import { CinemaRepositoryService } from '../common/cinema.repository.service';
import { Cinema } from '../common/model';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss'],
})
export class CinemaListComponent implements OnInit {
  cinema: any;
  constructor(private _repo: CinemaRepositoryService) {
    this.cinema = this._repo.getProduct();
  }
  public console(){
    console.log(this.cinema)
  }

  ngOnInit(): void {}
}
