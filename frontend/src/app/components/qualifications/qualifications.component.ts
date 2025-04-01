import { Component } from '@angular/core';
import { UdemyQualificationsComponent } from './udemy-qualifications/udemy-qualifications.component';
import { LinkedinQualificationsComponent } from './linkedin-qualifications/linkedin-qualifications.component';
import { LinkedinLogoComponent } from '../shared/logos/linkedin-logo/linkedin-logo.component';

@Component({
  selector: 'app-qualifications',
  imports: [UdemyQualificationsComponent, LinkedinLogoComponent, LinkedinQualificationsComponent],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.css',
})
export class QualificationsComponent {}
