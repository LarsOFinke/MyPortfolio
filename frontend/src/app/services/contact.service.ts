import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from '../../environment/environment.testing';
import { ContactData } from '../interfaces/contactData';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  sendNewContact(payload: ContactData) {
    console.log("ContactService received payload: ", payload);
    this.httpClient.post(`${api_url}/new_contact`, payload);
  }
}
