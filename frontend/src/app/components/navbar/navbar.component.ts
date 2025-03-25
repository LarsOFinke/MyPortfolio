import { Component } from '@angular/core';
import { MobileNavbarComponent } from './mobile/mobile-navbar.component';
import { DesktopNavbarComponent } from './desktop/desktop-navbar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MobileNavbarComponent, DesktopNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
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
