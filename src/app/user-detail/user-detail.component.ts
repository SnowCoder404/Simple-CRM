import { Component } from '@angular/core';
import { FirebaseServices } from '../services/firebase.services.ts.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  imports: [MatCardModule, MatIconModule, MatMenuModule, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId:string | null = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: FirebaseServices) {
    this.route.paramMap.subscribe(routePath => {
      this.userId = routePath.get('id');
      if (this.userId) {
        this.firestore.moreDetail(this.userId, (user) => {
          this.user = user;
        });
      }  
    })
  }

  editUserData() {}

  editAddressData() {}
}
