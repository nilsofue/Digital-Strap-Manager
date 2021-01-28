import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { StrapConnectionService } from '../setup-straps/strap-connection.service';
import { IconSelectionComponent } from './icon-selection/icon-selection.component';

export interface Teams {
  name: string,
  color: string,
}

export interface DialogData {
  icon: string;
}
@Component({
  selector: 'app-team-game',
  templateUrl: './team-game.component.html',
  styleUrls: ['./team-game.component.scss']
})
export class TeamGameComponent implements OnInit {

  public numberOfTeams: number = 2;
  public teamNames: Teams[] = [];
  private _colors: string[] = ["Red", "Green", "Blue ", "Yellow", "Orange", "Violet", "Indigo"];
  public selectedIcon: string = "";
  public showStartGame: boolean = false;
  public showPrevious: boolean = false;
  public showNext: boolean = true;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(public strapConnectionService: StrapConnectionService,
    public dialog: MatDialog,) {
    this.onTeamNumberChange();
  }

  ngOnInit(): void {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(IconSelectionComponent, {
      width: '300px',
      data: { icon: this.selectedIcon }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.selectedIcon = result;
    });
  }

  selectionChange(e: StepperSelectionEvent) {
    switch (e.selectedIndex) {
      case 0:
        this.showNext = true;
        this.showPrevious = false;
        this.showStartGame = false;
        break;

      case 1:
        this.showNext = true;
        this.showPrevious = true;
        this.showStartGame = false;
        break;
      case 2:
        this.showNext = false;
        this.showPrevious = true;
        this.showStartGame = true;
        break;

      default:
        break;
    }
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
