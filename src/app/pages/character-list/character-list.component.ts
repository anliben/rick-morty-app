import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  name: string = '';
  type: string = '';
  img: string = '';
  isDead: boolean = false;

}
