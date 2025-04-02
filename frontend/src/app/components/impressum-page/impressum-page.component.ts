import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { currentEnvironment } from '../../../environment/environment';

@Component({
  selector: 'app-impressum-page',
  imports: [],
  templateUrl: './impressum-page.component.html',
  styleUrl: './impressum-page.component.css',
})
export class ImpressumPageComponent implements OnInit {
  contactInformation: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Importiere die Kontaktinformation aus der environment-Datei
    this.contactInformation = this.sanitizer.bypassSecurityTrustHtml(
      currentEnvironment.contactInformation
    );
  }
}
