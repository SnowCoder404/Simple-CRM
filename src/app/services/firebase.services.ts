import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, addDoc, onSnapshot, doc, updateDoc } from '@angular/fire/firestore';
import { Event } from '../models/event.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServices {

  constructor(private firestore: Firestore) {}

  getDocRef(doc: string) {
    return collection(this.firestore, doc);
  }

  getColRef(col: string) {
    return collectionData(this.getDocRef(col),{ idField: 'id' });
  }

  getSingleDocRef(docId: any) {
    return doc(this.firestore, 'users', docId);
  }

  async addUserData(userData: any, loading: boolean) {
    await addDoc(this.getDocRef("users"),userData).then(() => {
      loading = false;
    });
  }

  async addEvent(event: any, loading: boolean) {
    await addDoc(this.getDocRef("events"),event).then(() => {
      loading = false;
    });
  }

  moreDetail(docId: any, callback: (data: any) => void ) {
    onSnapshot(doc(this.firestore, 'users',docId), (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.data());
      } 
    })
  }

  async updateDetail(docId:string | null, jsonData: {}, callback: () => void) {
    await updateDoc(this.getSingleDocRef(docId), jsonData).then(() => {
      callback();
    });
  }
}
