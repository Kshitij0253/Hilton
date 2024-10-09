import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponentComponent
},
{ path: 'home', component: HomeComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
