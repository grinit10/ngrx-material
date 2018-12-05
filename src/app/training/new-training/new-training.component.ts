import { TrainingService } from './../training.service';
import { Exercise } from '../../shared/models/Exercise';
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  public training: Exercise;
  public exercises: Exercise[];
  @Output()
  trainingStart: EventEmitter<Exercise> = new EventEmitter<Exercise>();
  constructor(private _trainingService: TrainingService) {
  }

  ngOnInit() {
    this.exercises = this.exercises ? this.exercises : this._trainingService.getAvailableExercises();
  }

  onStartClick = (typeddl) => this._trainingService.startExercise(typeddl.value);
}
