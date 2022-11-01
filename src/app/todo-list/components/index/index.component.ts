import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  items:string[];

  constructor() {
    this.items = [];
  }


  addItem(item:string):void{
    this.items.push(item);
  }

  removeItem(index:number):void{
    this.items.splice(index,1);
  }


}
