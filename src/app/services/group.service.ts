import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DriveService {

    constructor(private http: Http) {
    }

    public getUserMemberOf(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/memberOf',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/memberOf',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/memberOf',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }
}
