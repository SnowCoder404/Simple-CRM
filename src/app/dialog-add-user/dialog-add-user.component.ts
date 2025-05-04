import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { User } from '../models/user.class';
@Component({
  selector: 'app-dialog-add-user',
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatDatepickerModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user: User = new User;
  bithDate: any;

  constructor() {
  }

  saveUser() {
    this.user.bithDate = this.bithDate.getTime(); 
    console.log(this.user)
  }
}
