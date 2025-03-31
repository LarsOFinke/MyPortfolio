import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { currentEnvironment } from '../../environment/environment';
import { ContactData } from '../interfaces/contactData';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  sendNewContact(payload: ContactData) {
    console.log("ContactService received payload: ", payload);
    return this.httpClient.post(`${currentEnvironment.api_url}/new_contact`, payload);
  }
}
