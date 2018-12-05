import { TrainingService } from './training.service';
import { Exercise } from '../shared/models/Exercise';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  public newTraining: Exercise;
  private startTrainingSubscription: Subscription;

  constructor(private _trainingService: TrainingService) {}

  ngOnInit() {
    this.startTrainingSubscription = this._trainingService.startTraingEvent.subscribe(
      exercise => this.newTraining = exercise
    );
  }

  ngOnDestroy() {
    this.startTrainingSubscription.unsubscribe();
  }

  stoppedTraining = (training: Exercise) => {
    this.newTraining = training;
  }
}
