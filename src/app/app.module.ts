import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import { CalendarComponent } from './calendar.component';
import { ContactComponent } from './contact.component';
import { SharePointComponent } from './sharepoint.component';
import { MailComponent } from './mail.component';

import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, CalendarComponent, ContactComponent, SharePointComponent , MailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
