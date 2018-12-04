import { DialogpopupComponent } from './../../shared/components/dialogpopup/dialogpopup.component';
import { Exercise } from '../../shared/models/Exercise';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Input() training: Exercise;
  @Output() trainingStopped: EventEmitter<Exercise> = new EventEmitter<Exercise>();

  public progress = 0;

  constructor(public dialog: MatDialog) {
    setInterval(() => {
      this.progress += 5;
    }, 1000);
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogpopupComponent, {
      data: 'Are you sure you want to stop training?'
    });

    dialogRef.afterClosed().subscribe(message => {
      this.training = message ? null : this.training;
      this.trainingStopped.emit(this.training);
    });
  }
}
