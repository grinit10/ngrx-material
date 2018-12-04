import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogpopup',
  templateUrl: './dialogpopup.component.html',
  styleUrls: ['./dialogpopup.component.css']
})
export class DialogpopupComponent implements OnInit {

  data = '';
  constructor(public dialogRef: MatDialogRef<DialogpopupComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
