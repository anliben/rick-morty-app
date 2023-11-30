import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home' , link: '/' },
    { label: 'Characters', link: 'ep-list' },
    { label: 'Epsode', link: 'character-list' },

  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
