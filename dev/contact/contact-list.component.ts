import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { ContactComponent } from './contact.component';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: 'templates/contact/contact.tpl.html',
  styleUrls: ['src/css/componets.css'],
  directives: [
    ContactComponent
  ],
  providers: [ ContactService ]
}) 

export class ContactListComponent implements OnInit {
  public contacts: Contact[];
  public selectedContact = null;

  constructor(private _contactService: ContactService) {

  }

  onSelect(contact) {
    this.selectedContact = contact;
  }

  getContacts() {
    this._contactService.getContacts()
    .then((contacts: Contact[] ) => this.contacts = contacts);
  }

  ngOnInit():any {
    this.getContacts();
  }
}