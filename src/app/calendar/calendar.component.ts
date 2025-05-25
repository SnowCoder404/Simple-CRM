import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddEventComponent } from '../dialogs/dialog-add-event/dialog-add-event.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FirebaseServices } from '../services/firebase.services';
import { Observable } from 'rxjs';
import { FullCalendarServices } from '../services/full-calendar.services';
import { DialogEditEventComponent } from '../dialogs/dialog-edit-event/dialog-edit-event.component';

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
    },
    eventClick: (info: any) => {
      this.editEvent(info.event)
    }
  };

  constructor(private dialog: MatDialog, private firestore: FirebaseServices, private fullCalendarService: FullCalendarServices) {
    this.items$ = this.firestore.getColRef("events");
    this.items$.forEach((events: any) => {
      events.forEach((event: any) => {   
        this.fullCalendarService.formatEvent(event, this.events, this.fullCalendar);
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

  editEvent(currentEvent: any) {
    this.events.forEach((event: any) => {
      if (currentEvent.title === event.title) {
        const dialog = this.dialog.open(DialogEditEventComponent);
        dialog.componentInstance.event = event;
      }
    })
  }
}