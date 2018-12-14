import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login';

  ngOnInit(){
    firebase.initializeApp({
      
      apiKey: "AIzaSyCuPD_PTphK8mexC9xUmOFHXrxTrYE8n6U",
      authDomain: "material-bedee.firebaseapp.com",
      databaseURL: "https://material-bedee.firebaseio.com",
      projectId: "material-bedee",
      storageBucket: "material-bedee.appspot.com",
      messagingSenderId: "830470224896"
    
    });
  }

}


  