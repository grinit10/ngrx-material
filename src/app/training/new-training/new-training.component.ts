import { TrainingService } from './../training.service';
import { Exercise } from '../../shared/models/Exercise';
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onStartClick = (form: NgForm) => this._trainingService.startExercise(form.value.exercise);
}
