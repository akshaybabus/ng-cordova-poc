import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirebaseConnectService {
  usersData: any;
  detailsRef:any;
  constructor(public afDatabase: AngularFireDatabase) {
  }
  initDetailsRef(){
    if(!this.detailsRef){
      this.detailsRef = this.afDatabase.list('/details');
    }
  }
  pushData(name,phone){
    this.initDetailsRef();
    let data = { name:name,phone:phone};
    this.detailsRef.push(data);
  }
  getDataObservable(){
    this.initDetailsRef();
    return this.detailsRef.valueChanges();
  }
}
