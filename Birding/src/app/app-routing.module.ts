import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BirdListComponent } from './home/bird-list/bird-list.component';
import { AddBirdComponent } from './home/add-bird/add-bird.component';
import { AddAreaComponent } from './home/add-area/add-area.component';
import { AddSpotComponent } from './home/add-spot/add-spot.component';
import { SpotListComponent } from './home/spot-list/spot-list.component';



const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },



  {
    path: 'home', children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'addbird', component: AddBirdComponent },
      { path: 'addarea', component: AddAreaComponent },
      { path: 'addspot', component: AddSpotComponent },
      { path: 'birdList', component: BirdListComponent },
      { path: 'spotList', component: SpotListComponent },
      // { path: 'register', component: RegisterComponent },

      { path: '**', redirectTo: 'login' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
