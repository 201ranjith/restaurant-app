import { Component, OnInit , inject} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.page';

export interface BreakfastItem {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number; 
}

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {
  public folder!: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private cartService: CartService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  breakfastItems: BreakfastItem[] = [
    {
      id: 1,
      name: 'Idly',
      image: 'assets/Breakfast Image/1.webp',
      price: 5.00,
      amount: 1
    },
    {
      id: 2,
      name: 'Poori',
      image: 'assets/Breakfast Image/2.jpg',
      price: 10,
      amount: 1
    },
    {
      id: 3,
      name: 'Dosa',
      image: 'assets/Breakfast Image/3.webp',
      price: 15,
      amount: 1
    },
    {
      id: 4,
      name: 'Pongal And Vadai',
      image: 'assets/Breakfast Image/4.jpg',
      price: 30,
      amount: 1
    },
    {
      id: 5,
      name: 'Rava Kichadi',
      image: 'assets/Breakfast Image/5.jpg',
      price: 20,
      amount: 1
    },
    {
      id: 6,
      name: 'Parotta',
      image: 'assets/Breakfast Image/6.jpg',
      price: 12,
      amount: 1
    },
    {
      id: 7,
      name: 'Adai ',
      image: 'assets/Breakfast Image/7.webp',
      price: 35,
      amount: 1
    },
    {
      id: 8,
      name: 'Idiyappam',
      image: 'assets/Breakfast Image/8.jpg',
      price: 15,
      amount: 1
    },
    {
      id: 9,
      name: 'Onion Uttapam',
      image: 'assets/Breakfast Image/9.jpg',
      price: 20,
      amount: 1
    },
    {
      id: 10,
      name: 'Masala dosa',
      image: 'assets/Breakfast Image/10.jpg',
      price: 45,
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
  addToCart(item: BreakfastItem) {
    console.log('Adding to cart:', item);
    this.cartService.addToCart(item);
  }
  removeFromCart(item: BreakfastItem) {
    this.cartService.removeFromCart(item); // Call removeFromCart from CartService
  }
}
