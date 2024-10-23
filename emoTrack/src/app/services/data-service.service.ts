import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  async addUserMood(moodData: any) {
    const moodCollection = collection(this.firestore, 'anotacoes');
    return await addDoc(moodCollection, moodData);
  }

  async getHistorico(): Promise<Observable<any[]>> {
    const historicoCollection = collection(this.firestore, 'anotacoes');
    return await collectionData(historicoCollection, { idField: 'id' });
  }
}
