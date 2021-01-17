import { Injectable } from '@angular/core';
import { ENavigationRoot } from './navigation.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public showBackButton: boolean = false;
  public headline: string = 'Digitized Straps';

  constructor() { }

  public navigateTo(root: ENavigationRoot) {
    if (root > 0) {
      this.showBackButton = true;
    } else {
      this.showBackButton = false;
    }

    switch (root) {
      case 1:
        this.headline = 'Team Game';
        break;
      case 2:
        this.headline = 'Setup Straps';
        break;
      default:
        this.headline = 'Digitized Straps';
        break;
    }
  }

}
