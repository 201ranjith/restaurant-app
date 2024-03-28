import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.page';

export interface coffeeItems {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number; 
}

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {
  public folder!: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private cartService: CartService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  coffeeItem: coffeeItems[] = [
    {
      id: 31,
      name: 'Americano',
      image: 'assets/Coffee image/1.jpg',
      price: 150,
      amount: 1
    },
    {
      id: 32,
      name: 'Cappuccino',
      image: 'assets/Coffee image/2.jpg',
      price: 300,
      amount: 1
    },
    {
      id: 33,
      name: 'Latte',
      image: 'assets/Coffee image/3.jpg',
      price: 400,
      amount: 1
    },
    {
      id: 34,
      name: 'Espresso',
      image: 'assets/Coffee image/4.jpg',
      price: 600,
      amount: 1
    },
    {
      id: 35,
      name: 'Affogato',
      image: 'assets/Coffee image/5.jpg',
      price: 800,
      amount: 1
    },
    {
      id: 36,
      name: 'Iced latte',
      image: 'assets/Coffee image/6.jpg',
      price: 1000,
      amount: 1
    },
    {
      id: 37,
      name: 'Frappuccino',
      image: 'assets/Coffee image/7.webp',
      price: 750,
      amount: 1
    },
    {
      id: 38,
      name: 'Red Eye',
      image: 'assets/Coffee image/8.webp',
      price: 400,
      amount: 1
    },
    {
      id: 39,
      name: 'Irish coffee',
      image: 'assets/Coffee image/9.jpg',
      price: 550,
      amount: 1
    },
    {
      id: 40,
      name: 'Cortado',
      image: 'assets/Coffee image/10.png',
      price: 300,
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
  addToCart(item: coffeeItems) {
    console.log('Adding to cart:', item);
    this.cartService.addToCart(item);
  }
  removeFromCart(item: coffeeItems) {
    this.cartService.removeFromCart(item); // Call removeFromCart from CartService
  }

}
