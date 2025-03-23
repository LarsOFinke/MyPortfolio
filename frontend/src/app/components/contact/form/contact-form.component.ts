import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactData } from '../../../interfaces/contactData';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  gender: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  companyName: string = '';
  message: string = '';
  tosAccepted: boolean = false;

  submitContactData() {
    const payload: ContactData = {
      gender: this.gender,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      companyName: this.companyName,
      message: this.message,
      tosAccepted:  this.tosAccepted,
    };
    console.log(payload);
  }
}
