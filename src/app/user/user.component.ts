import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog'
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatCardModule} from '@angular/material/card';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FirebaseServices } from '../services/firebase.services';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-user',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule, MatCheckboxModule, CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  items$: Observable<any[]>;
  
  constructor(public dialog: MatDialog, private firestore: FirebaseServices) {
    this.items$ = this.firestore.getColRef("users");
  }

  addUser() {
    this.dialog.open(DialogAddUserComponent);
  }
}
