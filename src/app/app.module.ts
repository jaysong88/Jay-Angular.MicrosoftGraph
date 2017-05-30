import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import { CalendarComponent } from './calendar.component';

import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, CalendarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
