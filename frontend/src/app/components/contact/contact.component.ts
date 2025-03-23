import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  gender: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  companyName: string = '';
  message: string = '';
  tosAccepted: boolean = false;

  submitContactData() {
    const payload = {
      gender: this.gender,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      companyName: this.companyName,
      message: this.message,
      tosAccepted: this.tosAccepted
    }
  }
}
