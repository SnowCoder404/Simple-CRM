import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { User } from '../models/user.class';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FirebaseServices } from '../services/firebase.services';

@Component({
  selector: 'app-dialog-add-user',
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatDatepickerModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user: User = new User;
  bithDate: any;
  loading = false;

  constructor(private firestore: FirebaseServices) {}

  saveUser() {
    this.loading = true;
    this.user.bithDate = this.bithDate.getTime(); 
    this.firestore.addUserData(this.user.toJson(), this.loading);
  }
}
