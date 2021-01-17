import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connect-dialog',
  templateUrl: './connect-dialog.component.html',
  styleUrls: ['./connect-dialog.component.scss']
})
export class ConnectDialogComponent implements OnInit {

  showFirstStep: boolean = true;
  showSecondStep: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showFirstStep = false;
      this.showSecondStep = true;
    }, 3000);
  }

}
