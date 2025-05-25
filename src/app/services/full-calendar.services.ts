import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullCalendarServices {
    convertDate(date: any) {
        return date.toDate().toISOString();
    }

    formatEvent(event: any, events: any[], fullCalendar: any) {
        delete event.id;
        event.start = this.convertDate(event.start);
        events.push(event);
        const calendarApi = fullCalendar.getApi();
        calendarApi.removeAllEvents(); 
        calendarApi.addEventSource(events);
    }
}