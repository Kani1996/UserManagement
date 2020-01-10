import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonProfileComponent} from './components/person-profile/person-profile.component';
import {HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent, data: { title: 'Home'}
},
{
  path: 'create-profile', component: PersonProfileComponent, data: { title: 'Profile'}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
