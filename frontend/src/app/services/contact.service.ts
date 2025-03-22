import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private gender: string = '';
  private firstName: string = '';
  private lastName: string = '';
  private phone: string = '';
  private email: string = '';
  private companyName: string = '';
  private message: string = '';

  constructor(private httpClient: HttpClient) {}

  sendContactForm() {}
}
