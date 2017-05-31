import { Component } from '@angular/core';
import { Event, Attendee, Calendar, MeetingRequest } from './interfaces/calendar.interface';
import { MSALService } from './services/msal.service';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'my-calendar',
  providers : [MSALService, CalendarService],
  template: `
    <h1>Calendar Information</h1>
    <div>
        <button (click)="login()">Login</button>
        <button (click)="getEvents()">Get Events</button>
        <button (click)="getCalendars()">Get Calendars</button>
        <button (click)="getCalendarView()">Get Calendar Views</button>
        <button (click)="createEvent()">Create Calendar Event</button>
        <button (click)="createCalendar()">Create Calendar</button>
        <button (click)="findMeeingTimes()">Find meeting times</button>
    </div>
    <div *ngIf="anyCalendarEvent">
        <div>
            <h3>All Events</h3>
            <ul *ngFor="let event of events">
                <li>subject: {{ event.subject }} </li>
                <li>attendee: {{ event.attendees[0].emailAddress.name }} </li>
                <li>id: {{ event.id }} </li>
            </ul>
        </div>
    </div>
    <div *ngIf="anyCalendar">
        <div>
            <h3>All Calendars</h3>
            <ul *ngFor="let calendar of calenders">
                <li>Name: {{ calendar.name }} </li>
                <li>Colo: {{ calendar.color }} </li>
                <li>id: {{ calendar.id }} </li>
            </ul>
        </div>
    </div>
    <div *ngIf="anyCalendarView">
        <div>
            <h3>All Calendar Views</h3>
            <ul *ngFor="let calendarView of calendarViews">
                <li>Response Status: {{ calendarView.responseStatus.response }} </li>
            </ul>
        </div>
    </div>
  `,
  styles: [`
         div { 
                background-color:#EFEFEF;
                margin-bottom:15px;
                padding:15px;
                border:1px solid #DDD;
                box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
                border-radius:3px;
            }
    `]
})
export class CalendarComponent  {
    anyCalendarEvent: boolean = false;
    anyCalendar: boolean = false;
    anyCalendarView: boolean = false;
    events: Event[];
    calenders: Calendar[];
    calendarViews: Event[];

    constructor ( private _msalService: MSALService, private _calendarService: CalendarService) {
    }

    login () {
        this._msalService.login();
    }

    getEvents() {
                this._calendarService.getCalendarEvents(localStorage.getItem('accessToken')).forEach( res => {
                    this.anyCalendarEvent = true;
                    console.log(res.json());
                    this.events = res.json().value;
                });
    }

    createEvent() {
                let event: Event = {} as Event;
                event.body = {} as any;
                event.start = {} as any;
                event.end = {} as any;
                event.location = {} as any;
                event.attendees = [] as Array<Attendee>;
                let attendee: Attendee = {} as Attendee;
                attendee.emailAddress = {} as any;

                event.subject = 'testing event';
                event.body.contentType = 'HTML';
                event.body.content = 'This is a testing event';
                event.start.dateTime = '2017-06-15T12:00:00';
                event.start.timeZone = 'Pacific Standard Time';
                event.end.dateTime = '2017-06-15T12:00:00';
                event.end.timeZone = 'Pacific Standard Time';
                event.location.displayName = 'Hart\'s Bar';
                attendee.emailAddress.address = 'jay.song@SPE178564.onmicrosoft.com';
                attendee.emailAddress.name = 'Jay Song';
                attendee.type = 'required';
                event.attendees.push(attendee);
        this._msalService.getToken().then((accessToken: any) => {
                this._calendarService.createEvent(accessToken, JSON.stringify(event)).subscribe( respo => {
                    console.log('Event is created successfully');
                    console.log(respo.json());
                });
            });
    }

    getCalendars() {
        this._msalService.getToken().then((accessToken: any) => {
                this._calendarService.getCalendars(accessToken).forEach( res => {
                    this.anyCalendar = true;
                    console.log(res.json());
                    this.calenders = res.json().value;
                });
            });
    }

    createCalendar() {
        let calendar: Calendar = {} as Calendar;
        calendar.name = 'Jay\'s Calendar';
        calendar.color = 'auto';
        calendar.changeKey = 'randomValue';
        this._msalService.getToken().then((accessToken: any) => {
                this._calendarService.createCalendar(accessToken, JSON.stringify(calendar)).subscribe( res => {
                    console.log('Calendar is created successfully');
                    console.log(res.json());
                });
            });
    }

    getCalendarView() {
        this._msalService.getToken().then((accessToken: any) => {
                this._calendarService.getDefaultCalendarView(accessToken, '2017-01-01T19:00:00.0000000', '2017-10-01T19:00:00.0000000')
                .forEach( res => {
                    this.anyCalendarView = true;
                    console.log(res.json());
                    this.calendarViews = res.json().value;
                });
            });
    }

    findMeeingTimes() {
                let meetingRequest: MeetingRequest = {} as MeetingRequest;
                meetingRequest = {} as any;
                meetingRequest.attendees = [] as any;
                let attendee: Attendee = {} as Attendee;
                attendee.emailAddress = {} as any;
                attendee.emailAddress.address = 'jay.song@SPE178564.onmicrosoft.com';
                attendee.emailAddress.name = 'Jay Song';
                attendee.type = 'required';
                meetingRequest.meetingDuration = 'PT2H';
                meetingRequest.returnSuggestionReasons = true;
                meetingRequest.minimumAttendeePercentage = 100;
                meetingRequest.attendees.push(attendee);
           this._msalService.getToken().then((accessToken: any) => {
                this._calendarService.findMeetingTimes(accessToken, JSON.stringify(meetingRequest)).subscribe( res => {
                    console.log('Find meeting times successfully');
                    console.log(res.json());
                });
            });
    }
}


