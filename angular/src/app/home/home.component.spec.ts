import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { FirebaseConnectService } from '../services/firebase-connect.service';

class FirebaseConnectServiceStub {
 
  pushData(name,phone){
   
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [FormsModule],
      providers:[
        { provide: FirebaseConnectService, useClass: FirebaseConnectServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.txtName && component.txtPhone).toBeFalsy();
  });


  it('showMessage get called when name is empty', () => {
    this.txtName="";
    this.txtPhone="423";
    const spy =  spyOn(component, 'showMessage');
    component.submitData();
    expect(spy).toHaveBeenCalled();
  });

  it('showMessage get called when phone is empty', () => {
    this.txtName="Arun";
    this.txtPhone="";
    const spy =  spyOn(component, 'showMessage');
    component.submitData();
    expect(spy).toHaveBeenCalled();
  });

  it('showMessage get called when both fields are empty', () => {
    this.txtName="";
    this.txtPhone="";
    const spy =  spyOn(component, 'showMessage');
    component.submitData();
    expect(spy).toHaveBeenCalled();
  });

  it('should show message with corresponding color', () => {
    component.showMessage("Hello","yellow");
    expect(component.spanMsg.text).toBe("Hello");
    expect(component.spanMsg.color).toBe("yellow")
  });

  it('should make all fields empty', () => {
    component.resetInputFields();
    expect(component.txtName).toBe("");
    expect(component.txtPhone).toBe("")
  });

  it('showMessage get called when fields are not empty', () => {
    this.txtName="Ram";
    this.txtPhone=4231;
    const spy =  spyOn(component, 'showMessage');
    component.submitData();
    expect(spy).toHaveBeenCalled();
  });
});
