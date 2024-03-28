import { Component, OnInit } from '@angular/core';
import { CartPage } from '../cart/cart.page';
import { CartService } from '../cart/cart.page';
import{CartItem,BreakfastItem,dinnerItemsFoods,sweetsItems,coffeeItems} from '../cart/cart.page';
import { Router } from '@angular/router';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }
  getTotalPrice() {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price * item.amount;
    }
    return total;
  }

  submitOrder() {
    // Your order submission logic here...
    if (this.cartItems.length === 0) {
      alert('Your cart is empty. Please add items to your cart before submitting your order.');
      return;
    }
  
    // Step 2: Confirm the order
    const confirmed = confirm('Are you sure you want to submit your order?');
    if (!confirmed) {
      this.router.navigate(['/']);// navigate to home page if order is cancelled
      return;
    }
  
    // Step 3: Submit the order
    // This is where you would typically send the order to your server.
    // For this example, we'll just log the order to the console.
    console.log('Order submitted:', this.cartItems);
  
    // Step 4: Clear the cart
    this.cartService.clearCart();
  
    // Step 5: Show a success message
    alert('Your order has been submitted successfully!');

    this.router.navigate(['/submit'])
    
  }
  
  

}
