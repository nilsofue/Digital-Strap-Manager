import { Component, OnInit } from '@angular/core';
import { StrapConnectionService } from '../setup-straps/strap-connection.service';

export interface Teams {
  name: string,
  color: string,
}
@Component({
  selector: 'app-team-game',
  templateUrl: './team-game.component.html',
  styleUrls: ['./team-game.component.scss']
})
export class TeamGameComponent implements OnInit {

  public numberOfTeams: number = 2;
  public teamNames: Teams[] = [];
  private _colors: string[] = ["Blue ", "Red", "Yellow", "Green", "Orange", "Violet", "Indigo"];

  constructor(public strapConnectionService: StrapConnectionService) {
    this.onTeamNumberChange();
  }

  ngOnInit(): void {
  }

  onTeamNumberChange() {
    if (this.numberOfTeams === null) return;
    this.teamNames = [];
    for (let i = 1; i <= this.numberOfTeams; i++) {
      this.teamNames.push(
        {
          name: 'Team ' + i,
          color: this._colors[(i - 1) % 7]
        }
      );
    }
  }
}
