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
  public newTraining: Exercise = null;
  private startTrainingSubscription: Subscription;
  private stopTrainingSubscription: Subscription;
  private completerainingSubscription: Subscription;

  constructor(private _trainingService: TrainingService) {}

  ngOnInit() {
    this.startTrainingSubscription = this._trainingService.startTraingEvent.subscribe(
      exercise => this.newTraining = exercise
    );

    this.stopTrainingSubscription = this._trainingService.stopTraingEvent.subscribe(
      () => this.newTraining = null
    );

    this.completerainingSubscription = this._trainingService.completeTraingEvent.subscribe(
      () => this.newTraining = null
    );
  }

  ngOnDestroy() {
    this.startTrainingSubscription.unsubscribe();
    this.stopTrainingSubscription.unsubscribe();
    this.completerainingSubscription.unsubscribe();
  }

  stoppedTraining = (training: Exercise) => {
    this.newTraining = training;
  }
}
