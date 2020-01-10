import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export class DialogData {
  email: string;
  name: string;
  sex: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.sex = "";
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
