import { Component } from '@angular/core';
import { UdemyQualificationsComponent } from './udemy-qualifications/udemy-qualifications.component';
import { LinkedinQualificationsComponent } from './linkedin-qualifications/linkedin-qualifications.component';

@Component({
  selector: 'app-qualifications',
  imports: [UdemyQualificationsComponent, LinkedinQualificationsComponent],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.css',
})
export class QualificationsComponent {}
