import { NgModule } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { app } from 'src/environments/environment';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => app),
    provideFirestore(() => getFirestore(app)),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
