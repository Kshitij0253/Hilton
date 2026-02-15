import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from 'src/app/services/appservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactForm!: FormGroup;
  submitted = false;
  isLoading = false;
  constructor(private fb: FormBuilder,private appService:AppserviceService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

    onSubmit() {
    if (!this.contactForm.valid) {
      alert('Contact Form Data:'+  JSON.stringify(this.contactForm.value));
      this.submitted = true;
      this.contactForm.reset();
      alert("Please Enter Valid Values");
      return ;
    }

    this.isLoading = true;
   this.appService.submitContact(this.contactForm.value).subscribe({
  next: (res) => {
    this.isLoading = false; 
    this.submitted = true;
    this.contactForm.reset();
    setTimeout(() => {
      this.submitted= false;
    }, 5000);
  },
  error: (err) => {
    this.isLoading = false; 
    console.error(err);
    alert('Failed to submit form');
  }
});
}


  
}
