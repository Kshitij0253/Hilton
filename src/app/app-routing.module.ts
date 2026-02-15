import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { ProductsComponent } from './component/products/products.component';
import { AboutComponent } from './component/about/about.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponentComponent
},
{ path: 'home', component: HomeComponentComponent },
{path:'product',component:ProductsComponent},
{path:'about',component:AboutComponent},
{path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
