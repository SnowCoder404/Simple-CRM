import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog'
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatCardModule} from '@angular/material/card';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule, CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  items$: Observable<any[]>;
  
  constructor(public dialog: MatDialog, private firestore: Firestore) {
    let users = collection(this.firestore, "users");
    this.items$ = collectionData(users,{ idField: 'id' });
    this.items$.forEach((item) => {
      console.log(item);
    })
  }

  addUser() {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      }
    });
  }
}
