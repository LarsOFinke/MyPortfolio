import { Injectable } from '@angular/core';
import { NavbarHeaderContents } from '../interfaces/navbar-header-contents';
import { PageOptions } from '../interfaces/page-options';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  navbarHeader: string = '';

  navbarHeaderContents: NavbarHeaderContents = {
    aboutMe: 'aboutMe',
    projects: 'projects',
    qualifications: 'qualifications',
    contact: 'contact',
  };

  constructor() {
    console.log('HeaderService initialized!');
  }

  fetchNavbarHeaderTitle(): string {
    return this.navbarHeader;
  }

  setNavbarHeader(page: PageOptions) {
    for (const key in page) {
      switch (key) {
        case 'aboutMe':
          this.navbarHeader = this.navbarHeaderContents[key];
          break;
        case 'projects':
          this.navbarHeader = this.navbarHeaderContents[key];
          break;
        case 'qualifications':
          this.navbarHeader = this.navbarHeaderContents[key];
          break;
        case 'contact':
          this.navbarHeader = this.navbarHeaderContents[key];
          break;
      }
    }
  }
}
