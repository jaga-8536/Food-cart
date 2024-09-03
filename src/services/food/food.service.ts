import { Injectable } from '@angular/core';
import { FOODS} from '../../app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():FOODS[]{
    return [
     {
      id: 1,
      price: 450,
      name: 'Lobster Gourmet',
      favourite: true,
      star: 4.2,
      tags:[ 'FastFood', 'lunch','Maincourse'],
      imageUrl: '/assets/food 1.jpg',
      cookTime: '15-25 min' ,
      origins: ['Indian']

     },
     {
      id: 2,
      price: 300,
      name: 'Bacon Tomato Cheese Pizza',
      favourite: true,
      star: 4.5,
      tags:[ 'FastFood', 'lunch','Snacks'],
      imageUrl: '/assets/food 2.jpg',
      cookTime: '20-25 min' ,
      origins: ['Indian']

     },
     {
      id: 3,
      price: 350,
      name: 'Mozzarella Cheese Pizza',
      favourite: true,
      star: 4.5,
      tags:[ 'FastFood', 'lunch','Snacks'],
      imageUrl: '/assets/food 3.jpg',
      cookTime: '20-25 min' ,
      origins: ['Indian']

     },
     {
      id: 4,
      price: 160,
      name: 'Burger & Fries',
      favourite: true,
      star: 4.5,
      tags:[ 'FastFood', 'Breakfast','Snacks'],
      imageUrl: '/assets/food 4.jpeg',
      cookTime: '10-15 min' ,
      origins: ['Indian',]

     },
     {
      id: 5,
      price: 280,
      name: 'Apple Sliced Pan Cake',
      favourite: true,
      star: 4.5,
      tags:[ 'FastFood', 'Snacks'],
      imageUrl: '/assets/food 5.jpg',
      cookTime: '20-25 min' ,
      origins: ['Indian','Chinese']

     },
     {
      id: 6,
      price: 259,
      name: 'Red Sauce Pasta',
      favourite: true,
      star: 4.5,
      tags:[ 'FastFood', 'Lunch','Dinner'],
      imageUrl: '/assets/food 6.jpg',
      cookTime: '15- 20 min' ,
      origins: ['Indian','Thai']

     },
     {
      id: 7,
      price: 180,
      name: 'Chili Chiken fried Momo ',
      favourite: true,
      star: 4.5,
      tags:[ 'FastFood', 'Snacks'],
      imageUrl: '/assets/food 7.jpg',
      cookTime: '20-25 min' ,
      origins: ['Indian','Chainese']

     },
     {
      id: 8,
      price: 260,
      name: 'Chicken Patty Burger & fries',
      favourite: true,
      star: 4.5,
      tags:[ 'FastFood', 'Breakfast'],
      imageUrl: '/assets/food 8.jpeg',
      cookTime: '15-20 min' ,
      origins: ['Indian','Chinese']

     }
    ];
  }
}
