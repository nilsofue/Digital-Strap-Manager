import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamGameComponent } from './team-game/team-game.component';
import { SetupStrapsComponent } from './setup-straps/setup-straps.component';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConnectDialogComponent } from './setup-straps/connect-dialog/connect-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "team-game", component: TeamGameComponent },
  { path: "setup-straps", component: SetupStrapsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamGameComponent,
    SetupStrapsComponent,
    ToolbarComponent,
    ConnectDialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
