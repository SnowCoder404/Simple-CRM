import { Component } from '@angular/core';
import { FirebaseServices } from '../services/firebase.services';
import { min, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  items$: Observable<any[]>;
  events: any = [];
  
  constructor(private firestore: FirebaseServices){
    let currentDate = new Date().toDateString();
    this.items$ = this.firestore.getColRef("events");
    this.items$.forEach((events) => {
      events.forEach((event) => {
        let eventDate = new Date(event.start.toDate().toISOString()).toDateString();
        if (eventDate === currentDate) {
          this.events.push(event);
        }
      })
    })
  }

  extractHour(date: any) {
    date = new Date(date * 1000);
    let hours = date.getHours().toString().padStart(2, '0');;
    let minutes =  date.getMinutes().toString().padStart(2, '0');; 
    return hours + ':' + minutes
  }
}