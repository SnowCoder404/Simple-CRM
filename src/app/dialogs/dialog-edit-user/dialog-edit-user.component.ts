import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseServices } from '../../services/firebase.services';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dialog-edit-user',
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatDatepickerModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user:any = {};
  userId:string | null = '';
  loading = false;

  constructor(private firestore: FirebaseServices) {
    console.log(this.user.bithDate)
  }

  updateUser() {
    this.loading = true;
    this.firestore.updateDetail(this.userId, this.user.toJson(), () => {
      this.loading = false;
    });
  }
}
