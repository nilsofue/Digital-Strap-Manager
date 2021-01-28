import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrapConnectionService {

  public names: string[] = [];
  public selectedIcon: string = "";

  constructor() { }

}
