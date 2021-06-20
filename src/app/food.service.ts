import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  fetchedFood:any=[];
  keywordToDisplay:string="";
  intFetchedFood:Observable<any> | undefined;
  constructor(private httpClient:HttpClient,private route:Router) { }
  findFood(key:any):void
  {
    this.route.navigate(["loading"]);
    const keyword=key.foodname;
    this.keywordToDisplay=keyword;
    console.log(keyword);
    console.log(typeof(key.foodname));
    console.log(typeof(keyword));
    this.intFetchedFood = this.httpClient.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=4530dd51&app_key=10f20c52a9410ec1c1346da310e64fa0&q=${keyword}`)
    this.intFetchedFood.subscribe((res)=>{
      this.fetchedFood=res.hits;
      console.log(res);
      this.route.navigate(["card"]); })
  }
}
