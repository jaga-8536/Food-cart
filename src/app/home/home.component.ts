import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { FOODS } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: FOODS[] = [];

  constructor(private fs: FoodService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params['searchItem']) {
        this.foods = this.fs.getAll().filter(food => 
          food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
        );
      } else {
        this.foods = this.fs.getAll();
      }
    });
  }
}
