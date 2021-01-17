import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ENavigationRoot } from './navigation.enum';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private _location: Location,
    public navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  public navigateTo(root: ENavigationRoot) {
    this.navigationService.navigateTo(root);
    this._location.back();
  }

}
