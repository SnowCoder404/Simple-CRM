import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddEventComponent } from '../dialog-add-event/dialog-add-event.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FirebaseServices } from '../services/firebase.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, MatIconModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  @ViewChild('fullcalendar') fullCalendar: any; 
  items$: Observable<any[]>;
  events: any = [];
  
  calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: this.events,
    dateClick: (info: any) => {
      this.addEvent(info);
    }
  };

  constructor(private dialog: MatDialog, private firestore: FirebaseServices) {
    this.items$ = this.firestore.getColRef("events");
    this.items$.forEach((events: any) => {
      events.forEach((event: any) => {   
        delete event.id;
        event.start = this.convertDate(event.start);
        this.events.push(event)
        const calendarApi = this.fullCalendar.getApi();
        calendarApi.removeAllEvents(); 
        calendarApi.addEventSource(this.events);
      })
    });
  }

  convertDate(date: any) {
    return date.toDate().toISOString();
  }

  addEvent(date: any) {
    const dialog = this.dialog.open(DialogAddEventComponent);
    dialog.componentInstance.event.start = date.date;
  }
}
