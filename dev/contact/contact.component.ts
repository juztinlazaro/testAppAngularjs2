import { Component } from 'angular2/core';
import { Router } from 'angular2/router'; 

@Component({
  selector: 'contact',
  template: `
  <br><br>
  <h1>Ey phone and contact of the selected person</h1> 
  <section class="details">
    <div class="inputwrapper">
      <span>First Name:</span>
      <input [(ngModel)]="contact.firstname" type="text" name="firstname">
    </div>

    <div class="inputwrapper">
      <span>Last name:</span> 
      <input [(ngModel)]="contact.lastname" type="text" name="lastname">
    </div>

    <div class="inputwrapper">
      <span>Phone:</span>
      <input [(ngModel)]="contact.phone" type="text" name="something">
    </div>

    <div class="inputwrapper">
      <span>Lastname:</span> 
      <input [(ngModel)]="contact.email" type="text" name="something">
    </div>
    <button (click)="onContactNew()"> 
      Create new Contact from this contact
    </button>
  </section>
  <br><br>
  `,
  inputs: ["contact"],
  styleUrls: ["src/css/componets.css"]
})

export class ContactComponent {
  public contact: Contact = null;

  constructor (private _router: Router) {}

  onContactNew() {
    this._router.navigate([
      'NewContact',
      { lastname: this.contact.lastname }
    ]);
  }
}