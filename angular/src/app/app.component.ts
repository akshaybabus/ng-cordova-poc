import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    var a = NaN;

    //with default rule of Sonarqube, compaing with NaN throws an error
    if (a === NaN) {
      console.log("a is NaN")
    } else if (a != NaN) {
      console.log("a is not NaN")
    }
  }
}
