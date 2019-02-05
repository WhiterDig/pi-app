import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
