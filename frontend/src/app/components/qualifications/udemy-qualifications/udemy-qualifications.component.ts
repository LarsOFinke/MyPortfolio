import { Component } from '@angular/core';
import { UdemyQualification } from '../../../interfaces/udemy-qualification';

@Component({
  selector: 'app-udemy-qualifications',
  imports: [],
  templateUrl: './udemy-qualifications.component.html',
  styleUrls: [
    './udemy-qualifications.component.css',
    '../qualifications.component.css',
  ],
})
export class UdemyQualificationsComponent {
  qualifications: UdemyQualification[] = [
    {
      category: 'python',
      name: 'Python Bootcamp',
      link: 'https://www.udemy.com/certificate/UC-62816cd1-e1e3-4a44-a153-e4c26f8ad710/',
      img: '../../../assets/images/cert_python.jpg',
    },
    {
      category: 'javascript',
      name: 'Javascript Bootcamp',
      link: 'https://www.udemy.com/certificate/UC-a1ac840e-3bd7-41a2-b44e-2b47e91b60cc/',
      img: '../../../assets/images/cert_javascript.jpg',
    },
    {
      category: 'linux',
      name: 'Linux LPIC-1 Bootcamp',
      link: 'https://www.udemy.com/certificate/UC-7834757f-b910-4e68-ab94-ddc55d4ff637/',
      img: '../../../assets/images/cert_linux.jpg',
    },
    {
      category: 'nginx',
      name: 'NGINX Bootcamp',
      link: 'https://www.udemy.com/certificate/UC-8bc4376e-a312-44aa-b709-67818a316000/',
      img: '../../../assets/images/cert_nginx.jpg',
    },
    {
      category: 'git',
      name: 'Git(Hub) Bootcamp',
      link: 'https://www.udemy.com/certificate/UC-185ec357-edf6-4013-8bb5-d120cc97dd69/',
      img: '../../../assets/images/cert_git.jpg',
    },
  ];
}
