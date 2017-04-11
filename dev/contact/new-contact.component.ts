import { Component } from 'angular2/core';
import { ContactService } from '../services/contact.service';
import { Router, RouteParams } from 'angular2/router';
import { OnInit } from 'angular2/core';
import { ControlGroup } from 'angular2/common';
import { FormBuilder } from 'angular2/common';
import { Validators } from 'angular2/common';

@Component({
  selector: 'contact',
  templateUrl: 'templates/contact/newContactFormBuilder.tpl.html',
  styleUrls: ['src/css/componets.css'],
  providers: [ ContactService ]
})

export class NewContactComponent implements OnInit {
  public passedLastname = "";
   //property for the bind to ngModel
   newContact: Contact;
   myForm: ControlGroup;

  constructor (
    private _contactService: ContactService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _formBuilder: FormBuilder
  ){}
  
  //insert add contact
  onAddContact(firstname, lastname, phone, email) {
    let contact: Contact = {
      firstname: firstname ,
      lastname: lastname ,
      phone: phone ,
      email: email
    };

    this._contactService.insertContact(contact);
    this._router.navigate(['Contacts']);
  }
  
  /*
    submit, new contact to contactServices api
    and redirect to contacts view
  */
  onSubmits(value) {
    /* v2 on submit */ 
    // this._contactService.insertContact(this.newContact);
    /* form builder approach */
    this._contactService.insertContact(this.myForm.value);
    this._router.navigate(['Contacts']);
  }

  /*
    initials the function for the after it loads
  */
  ngOnInit():any {
     // route params
    // this.passedLastname = this._routeParams.get('lastname');
    
    // ngForm validation and submit
    // this.newContact = {
    //   firstname: '',
    //   lastname: this._routeParams.get('lastname'),
    //   phone: '',
    //   email: ''
    // };

    //FormBuilder appoarch
    this.myForm = this._formBuilder.group({
      'firstname': ['', Validators.required],
      'lastname': [this._routeParams.get('lastname'), Validators.required],
      'phone': ['', Validators.required],
      'email': ['', Validators.required]
    });
  }
}