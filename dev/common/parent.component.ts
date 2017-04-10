import { Component } from 'angular2/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'parent',
  template: `
    <section class="parent">
      <h1>Parent</h1>
      <p> Value entered in child compoennt: {{childValue}} </p>
      <input type="text" #parentInput (keyup)="0"><br>

      <div class="child">
        <child [passedValue]="parentInput.value"
        (childChanged)="childValue = $event"
        ></child>
      </div>
    </section>
  `,
  directives: [ChildComponent],
  styleUrls: ['src/css/componets.css']
})

export class ParentComponent {
  childValue: string;
}
