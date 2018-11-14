import { Component, OnInit } from '@angular/core';
import { FirebaseConnectService } from '../services/firebase-connect.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  txtName:any="";
  txtPhone:any="";
  usersData:any;
  spanMsg = { text : "", color: ""};
  constructor(private _fbConnect : FirebaseConnectService) { 
  }

  submitData(){
    if(this.txtName!="" && this.txtPhone!="")
    {
      this.showMessage("Data added successfully","green");
      this._fbConnect.pushData(this.txtName,this.txtPhone);
      this.resetInputFields();
    }
    else{
      this.showMessage("Please enter name and phone","red");
    }
  }

  showMessage(text,color){
    this.spanMsg.text = text;
    this.spanMsg.color = color;
  }
  
  resetInputFields(){
    this.txtName="";
    this.txtPhone="";
  }
  ngOnInit() {

  }

}
