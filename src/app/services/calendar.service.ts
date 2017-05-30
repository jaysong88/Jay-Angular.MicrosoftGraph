import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CalendarService {

    constructor(private http: Http) {
    }

    /*    Microsoft Graph Calendar   */

    public getAllEvents(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getCalendarEvents(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/calendar/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/calendar/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendar/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getSpecifiedCalendarEvents(accessToken: string, calendarId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getSpecifiedCalendarEventsFromGroup(accessToken: string, calendarId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/'
                + id + '/calendargroup/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/'
                + userPrincipalName + '/calendargroup/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendargroup/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getSpecifiedCalendarEventsFromSpecifiedGroup(accessToken: string, calendarGroupId: string,
                        calendarId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/'
                + id + '/calendargroups/' + calendarGroupId + '/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/'
                + userPrincipalName + '/calendargroups/' + calendarGroupId + '/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendargroups/'
                + calendarGroupId + '/calendars/' + calendarId + '/events',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public createEvent(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            }
    }

    public createCalendarEvent(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/calendar/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/calendar/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/calendar/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            }
    }

    public createSpecifiedCalendarEvent(accessToken: string, calendarId: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/calendars/' + calendarId + '/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' +
                 userPrincipalName + '/calendars/' + calendarId + '/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/calendars/' + calendarId + '/events', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            }
    }

    public getCalendars(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/calendars',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/calendars',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendars',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getCalendarsInGroup(accessToken: string, calendarId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/calendarGroups/' + calendarId + '/calendars',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' +
                 userPrincipalName + '/calendarGroups/' + calendarId + '/calendars',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendarGroups/' + calendarId + '/calendars',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public createCalendar(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/calendars', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/calendars', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/calendars', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            }
    }

    public getCalendarGroups(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/calendarGroups',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/calendarGroups',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendarGroups',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public createCalendarGroup(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/calendarGroups', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/calendarGroups', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/calendarGroups', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            }
    }


     public getDefaultCalendarView(accessToken: string, startTime: string, endTime: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id +
                '/calendar/calendarView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName +
                '/calendar/calendarView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendar/calendarView?startDateTime='
                + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getCalendarViewInDefaultGroup(accessToken: string, calendarId: string,
            startTime: string, endTime: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/calendars/' + calendarId +
                '/calendar/calendarView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/calendars/' + calendarId +
                '/calendar/calendarView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendars/' + calendarId +
                '/calendar/calendarView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getCalendarViewInSpecifiedGroup(accessToken: string, calendarGroupId: string,
                        calendarId: string, startTime: string, endTime: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/'
                + id + '/calendargroups/' + calendarGroupId + '/calendars/' + calendarId +
                 '/calendar/calendarView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/'
                + userPrincipalName + '/calendargroups/' + calendarGroupId + '/calendars/' + calendarId +
                 '/calendar/calendarView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/calendargroups/'
                + calendarGroupId + '/calendars/' + calendarId +
                 '/calendar/calendarView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getReminderView(accessToken: string, startTime: string, endTime: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id +
                '/reminderView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName +
                '/reminderView?startDateTime=' + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/reminderView?startDateTime='
                + startTime + '&endDateTime=' + endTime,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public findMeetingTimes(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/findMeetingTimes', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/findMeetingTimes', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/findMeetingTimes', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            }
    }

    /*    END -- Microsoft Graph Calendar      */
}
