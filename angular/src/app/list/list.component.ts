import { Component, OnInit } from '@angular/core';
import { FirebaseConnectService } from '../services/firebase-connect.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usersData;
  constructor(private _fbConnect : FirebaseConnectService) {
    _fbConnect.getDataObservable().subscribe((data) => {
      this.usersData = data;
    });
   }

  ngOnInit() {
  }

}
