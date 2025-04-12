import { Component } from '@angular/core';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  currentProjectIndex: number = 0;
  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio',
      websiteLink: 'https://portfolio-finke.de/',
      websiteTitle:
        'Mein eigenes Portfolio, gehosted auf meinem Server mit DynDNS bei Strato.',
      gitHubLink: 'https://github.com/LarsOFinke/MyPortfolio',
      gitHubTitle: 'Link zum Quellcode auf GitHub für mein Portfolio.',
      descriptionText: `Mein erstes richtiges Projekt stellt ein klassisches Portfolio dar und
                        Sie befinden sich aktuell darauf. Mittlerweile habe ich das Frontend auf
                        Angular umgebaut und das Backend verschlankt. Gehosted wird es auf
                        meinem eigenen Server (Raspberry Pi 4) mit DyDNS bei Strato.`,
    },
    {
      id: 2,
      title: 'Quiz Webseite',
      websiteLink: 'https://quizwebsite.portfolio-finke.de/',
      websiteTitle: 'Link zur Quiz Website.',
      gitHubLink: 'https://github.com/LarsOFinke/QuizWebsite',
      gitHubTitle: 'Link zum Quellcode auf GitHub für die Quiz Website',
      descriptionText: `Mein nächstes Projekt, was ich Ihnen vorstellen möchte, ist eine Quiz-Website.
                        Es besteht aus einem Python Backend (Flask mit SQLite 3) und einem 
                        HTML, CSS und JavaScript Frontend.`,
    },
    {
      id: 2,
      title: 'Quiz Website - Angular',
      websiteLink: 'https://quizwebsite-angular.portfolio-finke.de/',
      websiteTitle: 'Link zur Quiz Website - Angular.',
      gitHubLink: 'https://github.com/LarsOFinke/QuizWebsite-Angular',
      gitHubTitle: 'Link zum Quellcode auf GitHub für die Quiz Website - Angular',
      descriptionText: `Dieses Projekt ist die Quiz Webseite erneut gebaut, dieses mal mit dem Angular-Framework. 
                        Demnach wird TypeScript im Frontend verwendet, das Backend besteht weiterhin aus Python (Flask).
                        Insbesondere die komponentenbasierte Projektstruktur und damit einhergehende Modularität hat mich
                        überzeugt Angular erstmal als mein Haupt-Augenmerk zu wählen.`,
    },
    {
      id: 3,
      title: 'Eternal Galaxy Conquest',
      websiteLink: 'https://egc.portfolio-finke.de/',
      websiteTitle: 'Link zu Eternal Galaxy Conquest.',
      gitHubLink: 'https://github.com/LarsOFinke/EternalGalaxyConquest',
      gitHubTitle: 'Link zum Quellcode auf GitHub für Eternal Galaxy Conquest.',
      descriptionText: `Das Projekt besteht aus Python, HTML, CSS und JavaScript, wobei Flask als micro-Framework
                        dient und den Websocket + API-Routen zur Verfügung stellt. Es steht bis jetzt das Login-System
                        und die Map-Generierung mit den Tile-Menüs und einigen Untermenüs.
                        Bei diesem Projekt bringt mich insbesondere die vertiefte 
                        Arbeit mit Javascript und einem Websocket dazu immer tiefer zu graben.`,
    },
  ];

  increase() {
    if (this.currentProjectIndex + 1 < this.projects.length) {
      this.currentProjectIndex++;
    }
  }

  decrease() {
    if (this.currentProjectIndex !== 0) {
      this.currentProjectIndex--;
    }
  }
}
