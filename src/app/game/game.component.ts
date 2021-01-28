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

  gameIsRunning: boolean = true;
  startTime: Date = new Date();
  pauseTime: Date = null;
  pointTeam1: number = 0;
  pointTeam2: number = 0;
  currentTime: string = "00:00 / 90:00";
  private _timeout = null;
  private _pauseTime = 0;

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
    const diff = new Date(new Date().getTime() - this.startTime.getTime() - this._pauseTime);
    const min = diff.getMinutes();
    const sec = diff.getSeconds();
    this.currentTime = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec} / 90:00`;
    if (sec % 10 === 5) {
      this.openSnackBar();
    }
    this._timeout = setTimeout(this.calcTime.bind(this), 1000);
  }

  restart() {
    clearTimeout(this._timeout);
    this.startTime = new Date();
    this.calcTime();
    this.currentTime = "00:00 / 90:00";
    this._pauseTime = 0;
    this.gameIsRunning = true;
  }

  notify() {
    const dialogRef = this.dialog.open(NotifyComponent);
  }

  interrupt() {
    this.gameIsRunning = !this.gameIsRunning;
    if (!this.gameIsRunning) { // pause
      clearTimeout(this._timeout);
      this.pauseTime = new Date();
    } else {
      this._pauseTime += new Date().getTime() - this.pauseTime.getTime();
      this._timeout = setTimeout(this.calcTime.bind(this), 1000);
    }
  }

  openSnackBar() {
    if (!this.strapConnectionService.names.length) return;
    const number = Math.max(0, Math.round(Math.random() * this.strapConnectionService.names.length) - 1);
    const message = `${this.strapConnectionService.names[number]} notifies you`;
    this._snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
