import { Component, HostListener, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { HomeComponentComponent } from '../home-component/home-component.component';
import { ProductsComponent } from '../products/products.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInDown', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      transition(':enter', [
        animate('0.3s ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
 isCollapsed = true;
  isScrolled = false;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  routetoProduct(){
    this.router.navigate(['/product']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
