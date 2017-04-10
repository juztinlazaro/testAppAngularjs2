Achitecture

MODULE
  -- SERVICE
MODULE
  -- COMPONENT
MODULE
  -- 

Application
 MODULE
  -- Component 1
 MODULE
  -- Component 2
MODULE
  -- Component 3


MODULE 
  -- DIRECTIVE X
MODULE
  -- SERVICE Y

METADATA
 js class


Installation
1. npm install
2. npm install -g typescript
3. Workplace
  https://github.com/mschwarzmueller/angular-2-beta-boilerplate

Structure
4. app -- complied project
5. assets/scss -- compiled assets
6. dev -- compose typescript, logic etc
   app.components.ts -- main compontent that compose of header content footer and routing
   boot.ts -- run the compiled project
7. node_module --- packages
8. src -- holds compiled css files
9. typings -- typescript related

--
<base href="/"> -- serving for root directory

name  -- component name.space -- extension
my-component.component.ts

#inputElement  -- create a local variable using #                    
<input type="text" #inputElement>

[class.is-awsome]="" = class directive like ng-class
<span [class.is-awsome]="">its is awesome?</span>


implements OnInit - fired when the component already initialize
  ngOnInit is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked. It is invoked only once when the directive is instantiated.

INSTALLATION
1. INSTALL NPM
2. INSTALL TRYPSCRIPT
3. INSTALL GULP
5. GULP - is a javascript task runner that lets you automate tasks such as

<h5 (click)="onSelect() "> 
  -- default events click that recognize of angular2
  -- () data flow to the component
  -- [] flow component to the data

<input [(ngModel)]="" type="text" name="something">

inputs: ["contact"] - tells this component receieve data in the html
 <contact>
  [contact]="selectedContact"
</contact>

SERVICE flow
1. Create a interface for describing the list data and declare all the property
2. Create a mock up for your data = storage of the data, then import hte interface describing the lsit data -- which is api maybe 
3. create service, import the api or data mock up
4. in service inject the promise for getting the data.
5. Import to the component you want to use.
  5.1 In decoration put = providers: [ componentService ] == to inject the data in component
  5.2 Import service
  5.3 create constructor(privete _contactService: ContactService) {}
            private -- automatic assign the object in the instance, get in the injection to
            privte class.
  5.4 create function that fetch the data from server
  5.5 Oninit for initialization good practices


ROUTING
 1. Important <base href="/"> = element should actually be located right after the
    <head> tag (the opening tag!).
  2. boot.ts, bootstraping the component
  3. import ROUTER_PROVIDERS and include in dependency, 
     on angular2/router bootstrap for the router services
  4. go to app.component or for setting up the route create the header and navigation
    <a [routerLink]="['Contacts']"> Contacts </a>
    import ROUTER_DIRECTIVES in angular2/router =
    meaning ROUTER_DIRECTIVES compose of  RouterLink for href, RouterOutlet for content or html
  5. Import RouterConfig in angular2/rotuer for routerConfig decorator
    @RouteConfig(){} -- easy error source
    set up the path = route, name of route, component of route, or useAsDefault for home or default page


INSERT CONTACT 
1. In the contact service, create a function that insert a contact
2. this._router.navigate(['Contacts']);
  navigate function set or go to the route name or route destination

REMINDER:
 CARE OR BE SMART ABOUT THE COMPONENTS INJECTION HIERARCHY

ROUTING WITH PARAMETERS
1. import routeParams
2. bind the routeParams
3. fix the url, declare a params or leave it 
  declare - newContact/lazaro
  leave it - newContact?lastname=lazaro

Forms (with Two-Way Databinding)
1. wrap in form, create variable and declare it ngForm
  - wrapping in the form will automatically attached angular to ngform
2. ngControl and ngControlGroup
  - controll the variable ex. value, datatype or etc
  - automaticaly access of the validity or value 
3. 3 css class validation, 
  ng-pristine 
  ng-invalid 
  ng-touched
  ng-untouched
  ng-dirty
4. [ngSubmit]="onSubmit()"


Forms using Angular 2 Formbuilder
1. make the the form in property of the component
  yourForm: ControlGroup 
   - ControlGroup from angurlar/common
2. import formBuilder from angurlar/common
  - for service of the from 
  - create a private construction for injection
3. set up your properties or value in your form
    this.myForm = this._formBuilder.group({
      'firstname': ['', Validators.required],
      'lastname': [this._routeParams.get('lastname'), Validators.required],
      'phone': ['', Validators.required],
      'email': ['', Validators.required]
    });
4. get yoyr form.value to use for submition
  this._contactService.insertContact(this.myForm.value);
5. Assign the default value in your form 
  [ngFormModel]="myForm" then past it on
  (ngSubmit)="onSubmit(myForm.value)"
6. then assign it on the input to get the value
  [ngFormControl]="myForm.controls['lastname']"
7. disable button if the form not complete or valid
  [disabled]="!myForm.valid"
  or message
  <h6 *ngIf="!myForm.controls['firstname'].valid">
    Ey first name not valid
  </h6>
  or another way, create a local varialbe and check it if its valid
  #phone="ngForm"
  <h6 *ngIf="!phone.valid">
    Ey lphone not valid
  </h6>


HTTP (GET and POST to RESTful Service)
  1. property for the function, getdata and postdata
  2. IMPORTANT: 
      - include  <script src="node_modules/angular2/bundles/http.js"></script>
  3. http://www.jsontest.com/
  4. Study about observable
  5. IMPORTANT - import HTTP_PROVIDERS globally to boot.ts
    so you can use it anywhere
  6. import 'rxjs/add/operator/map'; for map function
  7. FOR POST request: import Headers in angular2/https
 


Pipes
 - A pipe takes in data as input and transforms it to a desired output
 - fiters, currency, uppercase


Inputs and Outputs 
  1. passing to parent to child, inputs basic baby
  2. passing to child to parent, outputs
    Create a custom event
    - import EventEmitter
    - create a proper to for EventEmitter
      childChanged = new EventEmitter<string>();
    - passing a string
    -Create a function to get a input value
      .emit(valie) - a function that ceate by EventEmitter
    $event -- IMPORNTANT: argument that stores the data to pass in custom event
  3. Alias inputs: ['parentValue:passedValue']