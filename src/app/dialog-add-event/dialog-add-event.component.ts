import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() startTime: string = '';
  event: any = {}
  loading = false;
  activePriority: string = ''; 

  constructor(private firestore: FirebaseServices) {}


  saveEvent() {
    const startDate = new Date(this.event.start);
    startDate.setHours(Number(this.startTime.split(":")[0]), Number(this.startTime.split(":")[1]));
    this.event.start = startDate;
    let event = new Event(this.event);
    this.firestore.addEvent(event.toJson(), this.loading);
  }

  setActive(priority: string) {
    this.activePriority = priority;
  }
}
