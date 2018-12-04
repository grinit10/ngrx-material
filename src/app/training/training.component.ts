import { Training } from './../shared/models/Training';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  public newTraining: Training;

  constructor() {}

  ngOnInit() {}

  addNewTraining = (training: Training) => {
    this.newTraining = training;
  }

  stoppedTraining = (training: Training) => {
    this.newTraining = training;
  }
}
