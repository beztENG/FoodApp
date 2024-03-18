import { Component } from '@angular/core';
import { ServiceFoodService } from 'src/app/services/service.food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  tags?:Tag[];

  constructor(foodService: ServiceFoodService){
    this.tags = foodService.getAllTags();
  }
}
