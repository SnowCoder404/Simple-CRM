import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, addDoc, onSnapshot, doc, updateDoc } from '@angular/fire/firestore';
import { Event } from '../models/event.class';

@Injectable({
  providedIn: 'root'
})
export class FullCalendarServices {
  
  convertDate(date: any) {
    return date.toDate().toISOString();
  }
}