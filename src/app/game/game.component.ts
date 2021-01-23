import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StrapConnectionService } from '../setup-straps/strap-connection.service';
import { NotifyComponent } from './notify/notify.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  startTime: Date = new Date();
  currentTime: string = "00:00 / 90:00";
  private _timeout = null;

  constructor(
    public strapConnectionService: StrapConnectionService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.startTime = new Date();
    this.calcTime();
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    clearTimeout(this._timeout);
  }

  calcTime() {
    const diff = new Date(new Date().getTime() - this.startTime.getTime());
    const min = diff.getMinutes();
    const sec = diff.getSeconds();
    this.currentTime = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec} / 90:00`;
    if (sec % 10 === 5) {
      this.openSnackBar();
    }
    this._timeout = setTimeout(this.calcTime.bind(this), 1000);
  }

  restart() {
    this.startTime = new Date();
    this.currentTime = "00:00 / 90:00";
  }

  notify() {
    const dialogRef = this.dialog.open(NotifyComponent);
  }

  openSnackBar() {
    if (!this.strapConnectionService.names.length) return;
    const message = `${this.strapConnectionService.names[Math.round(Math.random() * this.strapConnectionService.names.length)]} notifies you`;
    this._snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
