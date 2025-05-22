import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog'
import { DialogAddUserComponent } from '../dialogs/dialog-add-user/dialog-add-user.component';
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
  users: any = []

  constructor(public dialog: MatDialog, private firestore: FirebaseServices) {
    this.items$ = this.firestore.getColRef("users");
    this.loadBackendData();
  }

  addUser() {
    this.dialog.open(DialogAddUserComponent);
  }

  searchUser(event: Event) {
    const searchUser = (event.target as HTMLInputElement).value;
    const searchUserArray: any = []
    if (searchUser.length > 2) {
      this.users.filter((user: any) => {
        if (user.firstName.toLowerCase().includes(searchUser)) {
          searchUserArray.push(user);
        }
      })
      this.users = searchUserArray;
    } else {
      this.loadBackendData();
    }

  }

  loadBackendData() {
    this.items$.forEach((users)=> {
      this.users = users;
    });
  }

  sortUser(checkbox: boolean, filter: string) {
    if (checkbox) {
      this.users.sort((a: any, b: any) => {
        if (!a[filter]) return 1;
        if (!b[filter]) return -1;
        return a[filter].localeCompare(b[filter]);
      });
    } else {
      this.loadBackendData();
    }
  }
}