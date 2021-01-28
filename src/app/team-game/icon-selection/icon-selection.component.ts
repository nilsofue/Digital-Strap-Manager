import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../team-game.component';

@Component({
  selector: 'app-icon-selection',
  templateUrl: './icon-selection.component.html',
  styleUrls: ['./icon-selection.component.scss']
})
export class IconSelectionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IconSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
