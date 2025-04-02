import { Component } from '@angular/core';
import { ContactFormComponent } from './form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {}
