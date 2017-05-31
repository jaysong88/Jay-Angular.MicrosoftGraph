import { Component } from '@angular/core';
import { Contact } from './interfaces/contact.interface';
import { MSALService } from './services/msal.service';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'my-contact',
  providers : [MSALService, ContactService],
  template: `
    <h1>Contact Information</h1>
    <div>
        <button (click)="login()">Login</button>
        <button (click)="getContacts()">Get Contacts</button>
        <button (click)="creatContact()">Create Contact</button>
    </div>
    <div *ngIf="anyContact">
        <div>
            <h3>All Contacts</h3>
            <ul *ngFor="let contact of contacts">
                <li>Surname: {{ contact.surname }} </li>
                <li>LastName: {{ contact.givenName }} </li>
                <li>Mobile Phone: {{ contact.mobilePhone }} </li>
            </ul>
        </div>
    </div>
  `,
  styles: [`
         div { 
                background-color:#EFEFEF;
                margin-bottom:15px;
                padding:15px;
                border:1px solid #DDD;
                box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
                border-radius:3px;
            }
    `]
})
export class ContactComponent  {
    anyContact: boolean = false;
    contacts: Contact[];

    constructor ( private _msalService: MSALService, private _contactService: ContactService) {
    }

    login () {
        this._msalService.login();
    }

    getContacts() {
        this._msalService.getToken().then((accessToken: any) => {
                this._contactService.getAllContacts(accessToken).forEach( res => {
                    this.anyContact = true;
                    console.log(res.json());
                    this.contacts = res.json().value;
                });
            });
    }

    creatContact() {
        let contact: Contact = {} as Contact;
        contact.givenName = 'Song';
        contact.surname = 'Jay';
        contact.mobilePhone = '0421810865';
        this._msalService.getToken().then((accessToken: any) => {
                this._contactService.createContact(accessToken, JSON.stringify(contact)).subscribe( res => {
                    console.log('contact is created successfully');
                });
            });
    }

}


