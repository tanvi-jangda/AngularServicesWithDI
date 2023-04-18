import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public numberResponse:any;
  public stringResponse:any;
  public inputNumber=4;
  public inputString="Marvellous";
  constructor(public nObj:NumberService, public sObj:StringService)
  {

  }

  ngOnInit(): void {
    this.numberResponse=this.nObj.ChkPrime(this.inputNumber);
    this.stringResponse=this.sObj.CountCapital(this.inputString);
  }
}
