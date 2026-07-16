import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  gotoForm(){
this.router.navigateByUrl('https://docs.google.com/forms/d/e/1FAIpQLSckmneObdd2pO3FpLiEmir3d91iFUU03z8hLduZnZmJHYJfcQ/viewform?usp=publish-editor');
  }
}
