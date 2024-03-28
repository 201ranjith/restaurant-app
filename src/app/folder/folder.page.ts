import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CartService } from '../cart/cart.page';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  cartItemCount!: Observable<number>;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private cartService: CartService,private router: Router) {}

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }


  public categories = [
    { 
      title: 'Breakfast',route:'/breakfast',Image:'assets/Breakfast Image/Home im.jpg', time: this.getTimeForCategory(8, 12) },// 8 AM to 12 PM
    { title: 'Lunch', route:'/dinner', Image:'assets/Lunch image/Home.jpg',     time: this.getTimeForCategory(12, 17) }, // 12 PM to 5 PM
    { title: 'Sweets', route:'/sweets', Image:'assets/Sweets image/Home.jpg',  time: this.getTimeForCategory(14, 20) },// 2 PM to 8 PM
    { title: 'Coffee', route:'/coffee', Image:'assets/Coffee image/Home.avif', time: this.getTimeForCategory(17, 21) }// 5 PM to 9 PM
  ];


  private getTimeForCategory(startHour: number, endHour: number): string {
    const now = new Date();
    const currentHour = now.getHours();
    if (currentHour >= startHour && currentHour < endHour) {
      return 'Open';
    } else {
      return 'Closed';
    }
  }

  navigateToCategory(route: string) {
    // Navigate to the specified route
    this.router.navigate([route]);
  }

}
