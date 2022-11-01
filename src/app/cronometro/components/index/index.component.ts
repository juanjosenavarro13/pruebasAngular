import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  time:number;
  interval:any;

  constructor() {
    this.time = 0;
  }

  ngOnInit(): void {
  }

  start(){
    clearInterval(this.interval);
    this.time = 0;
    this.time++;
    this.interval = setInterval(()=>{
      this.time++;
    },1000);
  }

  stop():void{
    clearInterval(this.interval);
  }

}
