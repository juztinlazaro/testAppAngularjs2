//service for contact
import { Injectable }  from "angular2/core";
import { CONTACTS } from "../contact/mock-contact";


@Injectable()
export class ContactService {
  getContacts(){
    return Promise.resolve(CONTACTS);
  }

  insertContact(contact: Contact) {
    Promise.resolve(CONTACTS)
    .then((contacts: Contact[]) => contacts.push(contact));
  }
}