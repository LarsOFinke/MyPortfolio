import { Component } from '@angular/core';
import { MobileNavbarComponent } from './mobile/mobile-navbar.component';
import { DesktopNavbarComponent } from './desktop/desktop-navbar.component';

@Component({
  selector: 'app-navbar',
  imports: [MobileNavbarComponent, DesktopNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
