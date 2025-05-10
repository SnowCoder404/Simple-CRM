import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, MatIconModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  events = [];
  
  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: this.events
  };
}
