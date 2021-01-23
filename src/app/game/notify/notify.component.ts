import { Component, OnInit } from '@angular/core';
import { StrapConnectionService } from 'src/app/setup-straps/strap-connection.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(
    public strapConnectionService: StrapConnectionService,
  ) { }

  ngOnInit(): void {
  }

}
