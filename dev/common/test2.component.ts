import { Component } from 'angular2/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'test2',
  template:`
    <section class="testwrapper"> 
      <h1>TEST 2 </h1>

      <button (click)="onGetData()">
        Get random data
      </button>
      
      <p>Random: data: {{data}}</p>

      <input type="text" name="ramdom" #input>

      <button (click)="onAddItem(input.value)">
        Add
      </button>
    </section>
  `,
  providers: [ DataService ]
})

export class Test2Component {
  data: string;

  constructor(
    private _dataService: DataService
  ){}

  onGetData() {
    this.data = this._dataService.getRamdomData();
  }


  onAddItem(data: string) {
    this._dataService.insertData(data);
  }
}