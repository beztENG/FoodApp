import { Component, OnInit } from '@angular/core';
import { ServiceFoodService } from 'src/app/service.food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private ServiceFoodService:ServiceFoodService){
    this.foods = ServiceFoodService.getAll();
  }

  ngOnInit(): void {

  }
}
