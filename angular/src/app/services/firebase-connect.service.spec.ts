import { TestBed, inject, async } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseConnectService } from './firebase-connect.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Observable';

class AngularFireDatabaseModuleStub{
  list(path){
    return {
      push : (data)=>{

      },
      valueChanges: ()=>{
        return Observable.of([{name:"Arun",phone:213}])
      }
    }
  }
}

describe('FirebaseConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirebaseConnectService,
        { provide: AngularFireDatabase, useClass: AngularFireDatabaseModuleStub }
      ],
      imports:[
        CommonModule,
      ]
    });
  });

  it('should be created', inject([FirebaseConnectService], (service: FirebaseConnectService) => {
    expect(service).toBeTruthy();
  }));

  it('getDataObservables retrieves all the users', async(inject( [FirebaseConnectService], ( service: FirebaseConnectService ) => {
    service.getDataObservable().subscribe(result => expect(result.length).toBeGreaterThan(0)); 
  })));
});
