import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
 private list: Array<string> = [
   "X tudo",
   "Meus OVO",
   "Pao"

 ];


  constructor() { }
 public foodList(){
   return this.list;

 }


}
