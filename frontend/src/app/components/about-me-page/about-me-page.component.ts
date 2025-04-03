import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me-page',
  imports: [],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css',
})
export class AboutMePageComponent {
  profilePicture: string = 'profilbild.jpg';
  teaserText: string = `Ich bin Lars-O. Finke, Jahrgang '97 und wohnhaft in der schönen Hansestadt Hamburg!`;
  aboutMeText: SafeHtml = `
      <p>
        Durch meine Umschulung habe ich die Grundlagen der Programmierung in Python erlernt 
        und habe mich durch Flask langsam in den Bereich Webdevelopement herangetastet.
      </p>

      <p>
      Ich bin demnach mit den Grundlagen von HTML, CSS und JavaScript vertraut und habe mittlerweile sogar 
      auf Angular (TypeScript) umgebaut, um einen Einblick in die professionelle Entwicklung zu bekommen 
      und mich an die Projektstruktur zu gewöhnen.
      </p>

      <p>
      Insgesamt konnte ich durch meine Projekte einen ersten Einblick in das Berufsfeld eines Software Developers gewinnen 
      und hoffe durch das Praktikum, und die Umschulung im Gesamten, dort mein "neues Zuhause" zu finden.
      </p>

      <p>
        Zu meiner Person ist zu sagen, dass ich ein weltoffener und sehr
        neugieriger Mensch bin, der schon seit jeher ein ausgeprägtes Interesse
        im Bereich Technik hat.
      </p>

      <p>
        Bereits in meiner Kindheit hatte ich steten Kontakt mit Computern &
        Konsolen und bin bis heute sehr aktiv in der Online-Szene unterwegs,
        verbringe quasi jede freie Minute am PC.
      </p>

      <p>
        Ich verfüge über sehr gute Englischkenntnisse, besitze ein ausgeprägtes
        logisches Denken, eine zumeist schnelle Auffassungsgabe und ein sehr
        hohes Maß an Eigeninitiative, wenn es darum geht etwas Neues zu erlernen
        oder ein Problem zu lösen.
      </p>

      <p>
        Mein Ziel ist es ein Standbein in dem Bereich aufzubauen, den ich liebe
        und in dem ich mich wohl fühle. <br />
        Langfristig will ich einen Ausbilderschein machen, um meiner Berufung
        einen "tieferen Sinn" zu geben und auf diese Art meinen Fußabdruck für
        die zukünftigen Generationen zu hinterlassen.
      </p>

      <p>
        Wenn Sie also auf der Suche nach einem selbständigen Menschen sind, der
        nicht lange um den heißen Brei redet, klare Ziele und eine Menge
        Engagement mitbringt...
      </p>

      <h3>Dann bin ich Ihr Mann!</h3>`;
}
