import { Component } from '@angular/core';
import { ContactFormComponent } from './form/contact-form.component';


@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  
}
