import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  public response:any;
constructor(public sObj:StringService)
{

}
ngOnInit(){
  this.response=this.sObj.CountCapital("MEAN stack");
}
}
