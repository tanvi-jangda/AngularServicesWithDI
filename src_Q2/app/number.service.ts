import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(num1:number)
  {
    var flag:boolean=false;
    for (var i = 2; i <= num1 / 2; ++i) {
        if (num1 % i == 0) {
          flag = true;
          break;
        }
      }
    if (flag == false)
    return "It is a prime number";
    else
    return "It is not a prime number";
  }
}
