import { Training } from './../../shared/models/Training';
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  public training: Training;
  @Output()
  trainingStart: EventEmitter<Training> = new EventEmitter<Training>();
  constructor() {
  }

  ngOnInit() {
  }

  onStartClick = (typeddl) => {
    this.training = this.training ? this.training : new Training();
    this.training.type = typeddl.value;
    this.trainingStart.emit(this.training);
  }
}
