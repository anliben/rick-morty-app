import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EpListComponent } from './pages/ep-list/ep-list.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';

const routes: Routes = [
  {
    path:  '',
    component:HomeComponent
  },
  {
    path:  'ep-list',
    component: EpListComponent
  },

  {
    path:  'character-list',
    component: CharacterListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
