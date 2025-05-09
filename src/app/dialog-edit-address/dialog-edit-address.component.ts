import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../models/user.class';
import { FirebaseServices } from '../services/firebase.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-edit-address',
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user:any = {};
  userId:string | null = '';
  loading = false;

  constructor(private firestore: FirebaseServices) {}

  updateAddress() {
    this.loading = true;
    this.firestore.updateDetail(this.userId, this.user.toJson(), () => {
      this.loading = false;
    });
  }
}