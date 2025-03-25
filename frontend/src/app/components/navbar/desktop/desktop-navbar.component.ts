import { Component } from '@angular/core';
import { NavLinkListComponent } from './nav-link-list/nav-link-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desktop-navbar',
  imports: [NavLinkListComponent],
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.css', '../navbar.component.css'],
})
export class DesktopNavbarComponent {
  header: string = 'TEST';
  path!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.url.subscribe((data: any) => (this.path = data.path));
    switch (this.path) {
      case '':
        this.header = 'HOME';
        break;

      case 'projects':
    }
  }
}
