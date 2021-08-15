import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit {

  constructor() {
  }

  @Output()
  closeModal = new EventEmitter<boolean>();

  public onClose() {
    this.closeModal.emit(false)
  }

  ngOnInit(): void {
  }

}
