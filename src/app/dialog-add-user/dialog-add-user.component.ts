import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { User } from '../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

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

  constructor(private firestore: Firestore) {}

  async saveUser() {
    this.loading = true;
    this.user.bithDate = this.bithDate.getTime(); 
    let collectionData = collection(this.firestore, 'users')
    await addDoc(collectionData, this.user.toJson()).then(() => {
      this.loading = false;
    });
  }
}
