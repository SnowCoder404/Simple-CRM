import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, addDoc, onSnapshot, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServices {

  constructor(private firestore: Firestore) {}

  getDocRef() {
    return collection(this.firestore, "users");
  }

  getColRef() {
    return collectionData(this.getDocRef(),{ idField: 'id' });
  }

  getSingleDocRef(docId: any) {
    return doc(this.firestore, 'users', docId);
  }

  async addUserData(userData: any, loading: boolean) {
    await addDoc(this.getDocRef(),userData).then(() => {
      loading = false;
    });
  }

  moreDetail(docId: any, callback: (data: any) => void ) {
    onSnapshot(doc(this.firestore, 'users',docId), (snapshot) => {
      if (snapshot.exists()) {
        callback({ id: snapshot.id, ...snapshot.data() });
      } 
    })
  }
}
