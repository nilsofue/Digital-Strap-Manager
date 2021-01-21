import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  startTime: Date = new Date();
  currentTime: string = "00:00 / 90:00";

  constructor() {
    this.startTime = new Date();
    this.calcTime();
  }

  ngOnInit(): void {

  }

  calcTime() {
    const diff = new Date(new Date().getTime() - this.startTime.getTime());
    const min = diff.getMinutes();
    const sec = diff.getSeconds();
    this.currentTime = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec} / 90:00`;
    setTimeout(this.calcTime.bind(this), 1000);
  }

}
