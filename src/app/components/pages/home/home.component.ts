import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceFoodService } from 'src/app/services/service.food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private ServiceFoodService:ServiceFoodService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods = ServiceFoodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.foods = ServiceFoodService.getAllFoodByTag(params.tag);
      else
      this.foods = ServiceFoodService.getAll();
    })
  }

  ngOnInit(): void {

  }
}
