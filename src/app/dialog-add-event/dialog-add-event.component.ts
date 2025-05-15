import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Event } from '../models/event.class';
import { FirebaseServices } from '../services/firebase.services';

@Component({
  selector: 'app-dialog-add-event',
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatDatepickerModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-add-event.component.html',
  styleUrl: './dialog-add-event.component.scss'
})
export class DialogAddEventComponent {
  event: any = {}
  loading = false;
  activePriority: string = ''; 

  constructor(private firestore: FirebaseServices) {}

  colorLoop() {
    if (document.querySelector(".active")?.innerHTML === "Low") {
      this.event.backgroundColor = "green";
    } else if (document.querySelector(".active")?.innerHTML === "Medium") {
      this.event.backgroundColor = "orange"; 
    } else {
      this.event.backgroundColor = "red";
    }
  }

  saveEvent() {
    this.colorLoop();
    let event = new Event(this.event);
    this.firestore.addEvent(event.toJson(), this.loading);
  }

  setActive(priority: string) {
    this.activePriority = priority;
  }
}
