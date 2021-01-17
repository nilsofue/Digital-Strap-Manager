import { Component, OnInit } from '@angular/core';
import { ENavigationRoot } from '../toolbar/navigation.enum';
import { NavigationService } from '../toolbar/navigation.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _navigationService: NavigationService,
  ) {
    this._navigationService.showBackButton = false;
  }

  ngOnInit(): void {
  }

  public navigateTo(root: ENavigationRoot) {
    this._navigationService.navigateTo(root);
  }

}
