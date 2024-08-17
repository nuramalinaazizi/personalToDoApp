import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getStorage } from 'firebase/storage';
import { provideStorage } from '@angular/fire/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClohHqqCNMK3A_sY-RpF48Z9ZIpfdj5hs",
  authDomain: "ionic-app-2b94b.firebaseapp.com",
  projectId: "ionic-app-2b94b",
  storageBucket: "ionic-app-2b94b.appspot.com",
  messagingSenderId: "942549969568",
  appId: "1:942549969568:web:64221b82f991896f8f37c5",
  measurementId: "G-H3QLJLES1S"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth()),
  provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
