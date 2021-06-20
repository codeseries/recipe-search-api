import { Component, OnInit } from '@angular/core';
import { FoodService } from "../food.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
fetchedFoodDisplay:any =[];
keywordToDisplay:string="";
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.load();
    
  }
  load():void{
    this.keywordToDisplay=this.foodService.keywordToDisplay;
    this.fetchedFoodDisplay=this.foodService.fetchedFood;
  }
}
