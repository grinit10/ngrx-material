import { DialogpopupComponent } from './../../shared/components/dialogpopup/dialogpopup.component';
import { Exercise } from '../../shared/models/Exercise';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  training: Exercise;
  duration = 0;
  calories = 0;

  @Output() trainingStopped: EventEmitter<Exercise> = new EventEmitter<Exercise>();

  public progress = 0;

  constructor(public dialog: MatDialog, private _trainingService: TrainingService) {
  }

  ngOnInit() {
    this.training = this._trainingService.runningExercise;
    setInterval(() => {
      if (this.duration === this.training.duration) {
        this._trainingService.completeExercise();
      }
      this.duration++;
      this.calories += this.training.calories / this.training.duration * this.duration;
      this.progress += 100 / this.training.duration;
    }, 1000);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogpopupComponent, {
      data: 'Are you sure you want to stop training?'
    });

    dialogRef.afterClosed().subscribe(message => {
      if (message) {
        this._trainingService.cancelExercise(this.duration, this.calories);
      }
    });
  }
}
