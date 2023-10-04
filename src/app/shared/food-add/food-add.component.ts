import { Component, OnInit } from '@angular/core';
//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})


export class FoodAddComponent implements OnInit {

 constructor(private foodListService: FoodListService){


 }
ngOnInit(): void {

}

public ListAddItem(value: string ){
 return this.foodListService.foodListAdd(value);

}


}