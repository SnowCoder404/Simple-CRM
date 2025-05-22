import { Component } from '@angular/core';
import { FirebaseServices } from '../services/firebase.services';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.class';
import { DialogEditUserComponent } from '../dialogs/dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialogs/dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  imports: [MatCardModule, MatIconModule, MatMenuModule, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId:string | null = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: FirebaseServices, private dialog: MatDialog) {
    this.route.paramMap.subscribe(routePath => {
      this.userId = routePath.get('id');
      if (this.userId) {
        this.firestore.moreDetail(this.userId, (user) => {
          this.user = new User(user);
        });
      }  
    })
  }

  editUserData() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
  }

  editAddressData() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
  }
}
