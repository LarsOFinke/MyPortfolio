import { Component } from '@angular/core';
import { GitHubLogoComponent } from '../shared/logos/git-hub-logo/git-hub-logo.component';

@Component({
  selector: 'app-projects',
  imports: [GitHubLogoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
