import { Routes } from '@angular/router';
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { QualificationsPageComponent } from './components/qualifications-page/qualifications-page.component';
import { ImpressumPageComponent } from './components/impressum-page/impressum-page.component';

export const routes: Routes = [
  { path: '', component: AboutMePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'qualifications', component: QualificationsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'impressum', component: ImpressumPageComponent },
];
