import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  NgForm,
  NgModelGroup,
} from '@angular/forms';
import { CinemaDatasourceService } from 'src/app/common/cinema.datasource.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export default class MovieFormComponent {
  private regUrl =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  public form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    genre: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z ]+$'),
    ]),
    year: new FormControl('', [
      Validators.required,
      Validators.pattern('[12]\\d{3}$'),
    ]),
    director: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z ]+$'),
    ]),
    runtime: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?!0+$)[0-9]{1,10}$'),
    ]),
    poster: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regUrl),
    ]),
  });
  constructor(private _movieService: CinemaDatasourceService) {}

  @Output()
  closeModal = new EventEmitter<boolean>();

  public onClose() {
    this.closeModal.emit(false);
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this._movieService.addMovie({
      Title: this.form.value.title,
      Genre: this.form.value.genre,
      Year: +this.form.value.year,
      Director: this.form.value.director,
      Runtime: `${this.form.value.runtime} min`,
      Poster: this.form.value.poster,
    });
    this.form.reset();
    this.onClose();
  }
}
