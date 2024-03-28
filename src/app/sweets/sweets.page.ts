import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.page';

export interface sweetsItems {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number; 
}

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.page.html',
  styleUrls: ['./sweets.page.scss'],
})
export class SweetsPage implements OnInit {
  public folder!: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private cartService: CartService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  sweetsItem: sweetsItems[] = [
    {
      id: 21,
      name: 'Mysore pak',
      image: 'assets/Sweets image/1.webp',
      price: 60,
      amount: 1 
    },
    {
      id: 22,
      name: 'Halwa',
      image: 'assets/Sweets image/2.jpeg',
      price: 100,
      amount: 1 
    },
    {
      id: 23,
      name: 'Kadalai urundai',
      image: 'assets/Sweets image/3.jpg',
      price: 50,
      amount: 1 
    },
    {
      id: 24,
      name: 'Chikki',
      image: 'assets/Sweets image/4.webp',
      price: 30,
      amount: 1 
    },
    {
      id: 25,
      name: 'Laddu',
      image: 'assets/Sweets image/5.jpg',
      price: 80,
      amount: 1 
    },
    {
      id: 26,
      name: 'Kozhukkatta',
      image: 'assets/Sweets image/6.jpg',
      price: 60,
      amount: 1 
    },
    {
      id: 27,
      name: 'Kesari',
      image: 'assets/Sweets image/7.webp',
      price: 110,
      amount: 1 
    },
    {
      id: 28,
      name: 'Payasam',
      image: 'assets/Sweets image/8.jpg',
      price: 65,
      amount: 1 
    },
    {
      id: 29,
      name: 'Kalkandu bath',
      image: 'assets/Sweets image/9.jpg',
      price: 200,
      amount: 1 
    },
    {
      id: 30,
      name: 'Adirasam',
      image: 'assets/Sweets image/10.jpg',
      price: 80,
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
  addToCart(item: sweetsItems) {
    console.log('Adding to cart:', item);
    this.cartService.addToCart(item);
  }
  removeFromCart(item: sweetsItems) {
    this.cartService.removeFromCart(item); // Call removeFromCart from CartService
  }
 
}
