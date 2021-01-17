import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StrapConnectionService } from '../strap-connection.service';

@Component({
  selector: 'app-connect-dialog',
  templateUrl: './connect-dialog.component.html',
  styleUrls: ['./connect-dialog.component.scss']
})
export class ConnectDialogComponent implements OnInit {

  showFirstStep: boolean = true;
  showSecondStep: boolean = false;
  name: string = "";

  constructor(
    private _strapConnectionService: StrapConnectionService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showFirstStep = false;
      this.showSecondStep = true;
    }, 3000);
  }

  save() {
    this._strapConnectionService.names.push(this.name);
  }

}
