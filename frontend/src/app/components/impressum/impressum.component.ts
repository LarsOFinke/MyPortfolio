import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from '../../../environment/environment.testing';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css',
})
export class ImpressumComponent implements OnInit {
  contactInformation: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Importiere die Kontaktinformation aus der environment-Datei
    this.contactInformation = this.sanitizer.bypassSecurityTrustHtml(
      environment.contactInformation
    );
  }
}
