import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-mobile-navbar',
  imports: [DropdownComponent],
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css', '../navbar.component.css']
})
export class MobileNavbarComponent {
  header: string = 'TEST';
  constructor(private headerService: HeaderService) {this.header = this.headerService.navbarHeader}

}
