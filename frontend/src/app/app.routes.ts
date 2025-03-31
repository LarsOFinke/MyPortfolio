import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

export const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'qualifications', component: QualificationsComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'impressum', component: ImpressumComponent}
];
