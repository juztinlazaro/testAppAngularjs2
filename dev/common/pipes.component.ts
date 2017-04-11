import { Component } from 'angular2/core';

@Component({
  selector: 'pipes',
  templateUrl: 'templates/common/pipe.tpl.html'
})

export class PipesComponent {
  date = new Date();

  ramdomData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ramdomdataaaaaa'), 1000);
  });
}