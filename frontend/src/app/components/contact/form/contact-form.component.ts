import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactData } from '../../../interfaces/contactData';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
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

  constructor(private contactService: ContactService) {}

  submitContactData() {
    const payload: ContactData = {
      gender: this.gender,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      companyName: this.companyName,
      message: this.message,
      tosAccepted: this.tosAccepted,
    };
    console.log('Contact Form submitting form data: ', payload);
    this.contactService.sendNewContact(payload).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.clearInputFields();
  }

  clearInputFields() {
    this.gender = '';
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.email = '';
    this.companyName = '';
    this.message = '';
    this.tosAccepted = false;
  }
}
