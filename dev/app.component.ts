import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { RouteConfig } from 'angular2/router';

import { ContactListComponent } from './contact/contact-list.component';
import { NewContactComponent } from './contact/new-contact.component';

import { HTTPTestComponent } from './http-test.component';
import { PipesComponent } from './common/pipes.component';
import { AboutComponent } from './common/about.component';
import { ParentComponent } from './common/parent.component';
import { TestComponent } from './common/test.component';

import { ProductViewComponent } from './product/product-view.component';


@Component({
    selector: 'my-app',
    template: `
      <header>
        <nav>
          <a [routerLink]="['About']"> About </a>
          <a [routerLink]="['Contacts']"> Contacts </a>
          <a [routerLink]="['NewContact']"> New Contact </a>
          <a [routerLink]="['HttpTest']"> HTTP TEST </a>
          <a [routerLink]="['Pipes']"> Pipes TEST </a>
          <a [routerLink]="['InputOutput']"> Inputs and Outputs </a>
          <a [routerLink]="['Products']"> Products </a>
          <a [routerLink]="['Test']"> Dependency Injection </a>
        </nav>
      </header>
      
      <div class="main">
        <router-outlet></router-outlet>
      </div>
    `,
    directives: [
      ROUTER_DIRECTIVES
    ],
    styleUrls: ['src/css/componets.css']
})

@RouteConfig([
  {
    path: '/About', 
    name: 'About',  
    component: AboutComponent,
    useAsDefault: true
  },
  {
    path: '/contacts', 
    name: 'Contacts',  
    component: ContactListComponent
  },
  {
    path: '/NewContact', 
    name: 'NewContact',  
    component: NewContactComponent
  },
  {
    path: '/NewContact/:lastname', 
    name: 'NewContactFromContact',  
    component: NewContactComponent
  },
  {
    path: '/HttpTest', 
    name: 'HttpTest',  
    component: HTTPTestComponent
  },
  {
    path: '/Pipes', 
    name: 'Pipes',  
    component: PipesComponent
  },
  {
    path: '/InputOutput', 
    name: 'InputOutput',  
    component: ParentComponent
  },
  {
    path: '/Products', 
    name: 'Products',  
    component: ProductViewComponent
  },
  {
    path: '/depedencyinjection', 
    name: 'Test',  
    component: TestComponent
  }
])

export class AppComponent {

}