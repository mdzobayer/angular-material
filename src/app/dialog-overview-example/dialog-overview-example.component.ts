import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DialogData } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component'

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.component.html',
  styleUrls: ['dialog-overview-example.component.css'],
})
export class DialogOverviewExample {

  email: string;
  name: string;
  sex: string;

  dialogData: DialogData = new DialogData();

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '350px',
      data: this.dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed : ', result);
      this.dialogData = result;
      console.log('dialogData : ', this.dialogData);
    });
  }

}

