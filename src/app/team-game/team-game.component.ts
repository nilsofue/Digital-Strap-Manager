import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-game',
  templateUrl: './team-game.component.html',
  styleUrls: ['./team-game.component.scss']
})
export class TeamGameComponent implements OnInit {

  public numberOfTeams: number = 0;
  public teamNames: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onTeamNumberChange() {
    this.numberOfTeams ? null : this.numberOfTeams = 0;
    this.teamNames = [];
    for (let i = 1; i <= this.numberOfTeams; i++) {
      this.teamNames.push('Team ' + i);
    }

  }
}
