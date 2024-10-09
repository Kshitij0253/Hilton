import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-toggle',
  templateUrl: './whatsapp-toggle.component.html',
  styleUrls: ['./whatsapp-toggle.component.css']
})
export class WhatsappToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openWhatsApp(): void {
    const phoneNumber = '9899800909';
    const message = 'Hello, I would like to inquire about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


}
