import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 categories: string[] = ['Switches', 'Controllers', 'Sensors'];
  selectedCategories: { [key: string]: boolean } = {};
  searchQuery: string = '';
  filteredProducts: any[] = [];
  
  
  // products = [
  //   { title: 'Product 1', description: 'Description for product 1', image: 'assets/sampe.png' },
  //   { title: 'Product 2', description: 'Description for product 2', image: 'assets/sampe2.png' },
  //   { title: 'Product 3', description: 'Description for product 3', image: 'assets/samp3.png' },
  //   { title: 'Product 4', description: 'Description for product 4', image: 'assets/sampe4.png' },
  //   { title: 'Product 5', description: 'Description for product 5', image: 'assets/sample5.jpg' },
  //   { title: 'Product 6', description: 'Description for product 6', image: 'assets/sample6.jpg' }
  // ];

products: any[] = [
    {
      id: 1,
      name: 'Micro Switch Type Z',
      image: 'assets/sampe.png',
      description: 'High-precision micro switch for industrial applications',
      category: 'Switches'
    },
    {
      id: 2,
      name: 'PID Controller Pro',
      image: 'assets/sampe2.png',
      description: 'Advanced PID controller with digital display',
      category: 'Controllers'
    },
    {
      id: 3,
      name: 'Humidity Sensor HX-100',
      image: 'assets/samp3.png',
      description: 'Industrial-grade humidity sensor',
      category: 'Sensors'
    },
    {
      id: 4,
      name: 'Limit Switch LS-200',
      image: 'assets/sampe4.png',
      description: 'Heavy-duty limit switch for safety applications',
      category: 'Switches'
    },
    {
      id: 5,
      name: 'Temperature Controller TC-500',
      image: 'assets/sample5.jpg',
      description: 'Digital temperature controller with multiple inputs',
      category: 'Controllers'
    },
    {
      id: 6,
      name: 'Pressure Sensor PS-300',
      image: 'assets/sample6.jpg',
      description: 'High-accuracy pressure sensor with digital output',
      category: 'Sensors'
    }
  ];

  constructor(private route: ActivatedRoute) { }

 ngOnInit() {




    this.categories.forEach(category => {
      this.selectedCategories[category] = false;
    });
    this.filteredProducts = [...this.products];

    
  }

  filterProducts() {
    const activeCategories = Object.entries(this.selectedCategories)
      .filter(([_, isSelected]) => isSelected)
      .map(([category]) => category);

    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = activeCategories.length === 0 || activeCategories.includes(product.category);
      const matchesSearch = !this.searchQuery || 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }


  openWhatsApp(): void {
    const phoneNumber = '9868983656';
    const message = 'Hello, I would like to inquire about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

}
