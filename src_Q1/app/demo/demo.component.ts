import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public additionResult:any;
  public substractionResult:any;
  
  //initialize constructor with service dependency injection
constructor(public aObj:ArithmeticService)
{

}

ngOnInit()
{
 this.additionResult= this.aObj.Add(10,20);
 this.substractionResult=this.aObj.Sub(100,50);
}
}
