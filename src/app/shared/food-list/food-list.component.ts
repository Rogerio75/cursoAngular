//services
import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FoodList } from 'src/app/module/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> =[];
constructor (private foodListService: FoodListService) {}

  ngOnInit(): void {
   this.foodListService.foodList().subscribe(
     //res => this.foodList = res,
     error => console.log(error)

   ) ;
   this.foodListService.emitEvent.subscribe(

    res => alert(`Olha voce add => ${res}`)

   );

}


}
