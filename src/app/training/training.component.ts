import { Exercise } from '../shared/models/Exercise';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  public newTraining: Exercise;

  constructor() {}

  ngOnInit() {}

  addNewTraining = (training: Exercise) => {
    this.newTraining = training;
  }

  stoppedTraining = (training: Exercise) => {
    this.newTraining = training;
  }
}
