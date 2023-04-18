import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(input:string)
  {
      let res= 0;
      for (let i = 0; i < input.length; i += 1) {
        if (input[i].toUpperCase() === input[i] && input[i]!=" ") {
          res++;
        }
      }
      return res;
  }
}
