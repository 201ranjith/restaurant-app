import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.page';

export interface dinnerItemsFoods {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number; 
}

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.page.html',
  styleUrls: ['./dinner.page.scss'],
})
export class DinnerPage implements OnInit {
  public folder!: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private cartService: CartService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  dinnerItemsFood: dinnerItemsFoods[] = [
    {
      id: 11,
      name: 'Biryani',
      image: 'assets/Lunch image/1.jpg',
      price: 190,
      amount: 1
    },
    {
      id: 12,
      name: 'Mutton Biryani',
      image: 'assets/Lunch image/2.jpg',
      price: 210,
      amount: 1
    },
    {
      id: 13,
      name: 'Sambar Rice',
      image: 'assets/Lunch image/3.jpg',
      price: 30,
      amount: 1
    },
    {
      id: 14,
      name: 'Curd Rice',
      image: 'assets/Lunch image/4.jpg',
      price: 20,
      amount: 1
    },
    {
      id: 15,
      name: 'Veg-Meals',
      image: 'assets/Lunch image/5.webp',
      price: 75,
      amount: 1
    },
    {
      id: 16,
      name: 'Naan With Butter Masala',
      image: 'assets/Lunch image/6.jpg',
      price: 120,
      amount: 1
    },
    {
      id: 17,
      name: 'Veg Biryani',
      image: 'assets/Lunch image/7.jpg',
      price: 80,
      amount: 1
    },
    {
      id: 18,
      name: 'Tomato Rice',
      image: 'assets/Lunch image/8.webp',
      price: 50,
      amount: 1
    },
    {
      id: 19,
      name: 'Mushroom Briyani',
      image: 'assets/Lunch image/9.webp',
      price: 100,
      amount: 1
    },
    {
      id: 20,
      name: 'Kothu Porotta',
      image: 'assets/Lunch image/10.jpg',
      price: 60,
      amount: 1
    },
  ];


  goToHome() {
    this.router.navigateByUrl('/folder');
  }
  
  goToCart() {
    this.router.navigateByUrl('/cart').catch(err => {
      console.error('Navigation error:', err);
    });
  }
  addToCart(item: dinnerItemsFoods) {
    console.log('Adding to cart:', item);
    this.cartService.addToCart(item);
  }
  removeFromCart(item: dinnerItemsFoods) {
    this.cartService.removeFromCart(item); // Call removeFromCart from CartService
  }
 

}
