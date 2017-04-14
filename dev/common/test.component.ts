import { Component } from 'angular2/core';
import { Test2Component } from './test2.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'test',
  templateUrl: './templates/test.tpl.html',
  directives: [ Test2Component ],
  styleUrls: ['../../src/css/componets.css'],
  providers: [ DataService ]
})

export class TestComponent {
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