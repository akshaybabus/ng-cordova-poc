import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { FirebaseConnectService } from './services/firebase-connect.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBmNBK-2bIUUe3UN62UAe7iWb0r6guQ9s4",
  authDomain: "ng-firebase-poc.firebaseapp.com",
  databaseURL: "https://ng-firebase-poc.firebaseio.com",
  projectId: "ng-firebase-poc",
  storageBucket: "ng-firebase-poc.appspot.com",
  messagingSenderId: "811613181109"
};

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
