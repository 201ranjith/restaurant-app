import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakfastItem } from '../breakfast/breakfast.page';
import {dinnerItemsFoods}from '../dinner/dinner.page';
import { coffeeItems } from '../coffee/coffee.page';
import { sweetsItems } from '../sweets/sweets.page';

export type CartItem = BreakfastItem | dinnerItemsFoods | sweetsItems | coffeeItems;

export { BreakfastItem } from '../breakfast/breakfast.page';
export { dinnerItemsFoods } from '../dinner/dinner.page';
export { sweetsItems } from '../sweets/sweets.page';
export { coffeeItems } from '../coffee/coffee.page';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  private cart: CartItem[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  getCart(): CartItem[] {
    return this.cart;
  }


  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  addToCart(item: CartItem): void {
    // Find the item in the cart
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.amount += 1; // If found, increase the amount
    } 
    else {
      this.cart.push({ ...item, amount: 1 }); // If not found, add to the cart with amount set to 1
    }
    this.updateCartItemCount();
  }

  removeFromCart(item: CartItem): void {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      if (existingItem.amount > 1) {
        // If the item's amount is more than 1, decrease it by 1
        existingItem.amount -= 1;
      } else {
        // If the item's amount is 1, remove the item from the cart
        const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.updateCartItemCount();
  }
  private updateCartItemCount() {
    const totalCount = this.cart.reduce((count, item) => count + item.amount, 0);
    this.cartItemCount.next(totalCount);
  }
  clearCart() {
    this.cart = [];
    this.updateCartItemCount();
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 
  cartItems: CartItem[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.updateCartItemCount();
  }

  getCart() {
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  

  addToCart(item: CartItem) {
    let added = false;
    for (const p of this.cartItems) {
      if (p.id === item.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      item.amount = 1;
      this.cartItems.push(item);
    }
    this.updateCartItemCount();
  }
  

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
    this.updateCartItemCount();
  }

  private updateCartItemCount() {
    const totalCount = this.cartItems.reduce((count, item) => count + item.amount, 0);
    this.cartItemCount.next(totalCount);
  }
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCart();
    this.updateCartItemCount();
  }

  

}


