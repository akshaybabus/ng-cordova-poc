import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { FirebaseConnectService } from '../services/firebase-connect.service';
import { Observable } from 'rxjs/Observable';



class FirebaseConnectServiceStub {
 
  pushData(name,phone){
   
  }
  getDataObservable(){
    return Observable.of([{name:"Arun",phone:342}]);
  }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports:[],
      providers:[{ provide: FirebaseConnectService, useClass: FirebaseConnectServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should contain data',() => {
    expect(component.usersData).toBeTruthy();
  })
});
