import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectDialogComponent } from './connect-dialog/connect-dialog.component';
import { StrapConnectionService } from './strap-connection.service';

@Component({
  selector: 'app-setup-straps',
  templateUrl: './setup-straps.component.html',
  styleUrls: ['./setup-straps.component.scss']
})
export class SetupStrapsComponent implements OnInit {

  constructor(
    public strapConnectionService: StrapConnectionService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openConnectDialog(): void {
    const dialogRef = this.dialog.open(ConnectDialogComponent, {
      width: '70%',
      data: {}
    });
  }

}
