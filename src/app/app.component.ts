import { Component } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatSidenavModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-crm';
  isDark: boolean;

  constructor() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
      this.isDark = false;
    } else {
      this.isDark = true;
    }
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
  }
}
