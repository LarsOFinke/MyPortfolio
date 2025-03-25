import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  imports: [DropdownComponent],
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css', '../navbar.component.css'],
})
export class MobileNavbarComponent {
  header: string = 'TEST';
  path!: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.url.subscribe((data: any) => this.path = data.path);
    switch (this.path) {
      case '':
        this.header = "HOME";
        break;

      case 'projects':
    }
  }
}
