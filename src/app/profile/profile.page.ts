import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = {
    name: 'Ranjith Raghul.S',
    email: 'ranjith.rr.raghul@gmail.com',
    bio: 'Passionate developer and Games lover.',
    profilePictureUrl: 'assets/ranjith.jpg', // Path to your profile picture
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/ranjith-raghul-878534268/',
      github: 'https://github.com/201ranjith',
      instagram: 'https://www.instagram.com/ranjith_raghul_/',
    },
    // Add other user properties as needed
  };

  
  constructor() { }

  ngOnInit() {
  }

}
