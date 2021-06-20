import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FoodService } from "../food.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  fb:FormBuilder = new FormBuilder;
  searchForm:any;
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      "foodname":this.fb.control("",Validators.required)
    })
  }
  
  fetchResult(){
    console.log(this.searchForm.value);
    this.foodService.findFood(this.searchForm.value);
  }
}
