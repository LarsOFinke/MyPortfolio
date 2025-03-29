import { Component } from '@angular/core';

@Component({
  selector: 'app-linkedin-qualifications',
  imports: [],
  templateUrl: './linkedin-qualifications.component.html',
  styleUrls: [
    './linkedin-qualifications.component.css',
    '../qualifications.component.css',
  ],
})
export class LinkedinQualificationsComponent {
  qualifications: String[] = [
    'Einführung in grundlegende Fähigkeite',
    'Word Grundkurs (Microsoft 365)',
    'PowerPoint 2019 lernen',
    'Tabellendesign für relationale Datenbanken',
    'SQL Lernen',
  ];
}

// <li>Einführung in grundlegende Fähigkeiten</li>
// <li>Word Grundkurs (Microsoft 365)</li>
// <li>PowerPoint 2019 lernen</li>
// <li>Tabellendesign für relationale Datenbanken</li>
// <li>SQL Lernen</li>
