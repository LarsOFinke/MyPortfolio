import { Component } from '@angular/core';
import { UdemyQualificationsComponent } from '../qualifications-page/udemy-qualifications/udemy-qualifications.component';
import { LinkedinQualificationsComponent } from '../qualifications-page/linkedin-qualifications/linkedin-qualifications.component';

@Component({
  selector: 'app-qualifications-page',
  imports: [UdemyQualificationsComponent, LinkedinQualificationsComponent],
  templateUrl: './qualifications-page.component.html',
  styleUrl: './qualifications-page.component.css',
})
export class QualificationsPageComponent {}
