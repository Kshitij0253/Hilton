import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  products = [
    { title: 'Product 1', description: 'Description for product 1', image: 'assets/sampe.png' },
    { title: 'Product 2', description: 'Description for product 2', image: 'assets/sampe2.png' },
    { title: 'Product 3', description: 'Description for product 3', image: 'assets/samp3.png' },
    { title: 'Product 4', description: 'Description for product 4', image: 'assets/sampe4.png' },
    { title: 'Product 5', description: 'Description for product 5', image: 'assets/sample5.jpg' },
    { title: 'Product 6', description: 'Description for product 6', image: 'assets/sample6.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  openWhatsApp(): void {
    const phoneNumber = '9868983656';
    const message = 'Hello, I would like to inquire about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

}
