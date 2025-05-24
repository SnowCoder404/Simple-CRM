import { Component, ViewChild } from '@angular/core';
import { FirebaseServices } from '../services/firebase.services';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import listPlugin from '@fullcalendar/list';
import { FullCalendarServices } from '../services/full-calendar.services';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild('fullcalendar') fullCalendar: any; 
  items$: Observable<any[]>;
  events: any = [];
  
  calendarOptions = {
    plugins: [listPlugin],
    initialView: 'listDay',
    events: this.events,
    dateClick: (info: any) => {
  
    }
  };
  
  constructor(private firestore: FirebaseServices, private fullCalendarService: FullCalendarServices) {
    this.items$ = this.firestore.getColRef("events");
    this.items$.forEach((events: any) => {
      events.forEach((event: any) => {   
        delete event.id;
        event.start = this.fullCalendarService.convertDate(event.start);
        this.events.push(event)
        const calendarApi = this.fullCalendar.getApi();
        calendarApi.removeAllEvents(); 
        calendarApi.addEventSource(this.events);
      })
    });
  }



  extractHour(date: any) {
    date = new Date(date * 1000);
    let hours = date.getHours().toString().padStart(2, '0');;
    let minutes =  date.getMinutes().toString().padStart(2, '0');; 
    return hours + ':' + minutes
  }
}