import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { AboutComponent } from './components/about/about.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {
    path:"",component:GameComponent
  },
  {
    path:"game",component:GameComponent
  },
  {
    path:"about",component:AboutComponent
  }
  ,
  {
    path:"start/:id",component:StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
