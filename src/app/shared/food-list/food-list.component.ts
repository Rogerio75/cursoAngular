import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

constructor (private list: FoodListService) {}

  ngOnInit(): void {

}


}