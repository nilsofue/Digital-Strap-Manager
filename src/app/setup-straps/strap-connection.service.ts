import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrapConnectionService {

  public strapsConnected: number = 0;

  constructor() { }
}
