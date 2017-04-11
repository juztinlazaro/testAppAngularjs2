import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { TestComponent } from './test.component';

//decorator
@Component ({
  selector: 'my-component',
  template: `
    Hi, I'm 
    <span [style.color]="inputElement.value === 'yes' ? 'red' : ''"> 
      {{name}} 
    </span>
    {{last}} and this is smy very first angular 2 component!
    It's so awesome! 
    <br><br>
    <span [class.is-awsome]="inputElement.value === 'yes'">
      its is awesome?
     </span>
    <input [class.inputey] type="text" #inputElement (keyup)="0">
    <br><br>
    <button [disabled]="inputElement.value !== 'yes'">
      Only enabled if 'yes' was entered 
    </button>
    <test></test>
  `,
  styleUrls: ['src/css/componets.css'],
  directives: [
    TestComponent
  ]
})

export class MyComponentComponent implements OnInit {
  name: string;
  last: string;

  ngOnInit():any {
    this.name = "Justin";
    this.last = "lazaro";
  }
}

