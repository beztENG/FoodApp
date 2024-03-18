import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ServiceFoodService } from 'src/app/services/service.food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {
  food!: Food;
  
  constructor(activatedRoute:ActivatedRoute, foodService: ServiceFoodService,
    private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params)=> {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
