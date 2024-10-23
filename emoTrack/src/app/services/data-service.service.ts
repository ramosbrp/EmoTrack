import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  addUserMood(moodData: any) {
    const moodCollection = collection(this.firestore, 'anotacoes');
    return addDoc(moodCollection, moodData);
  }
}
