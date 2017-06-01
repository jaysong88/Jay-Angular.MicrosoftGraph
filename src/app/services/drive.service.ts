import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DriveService {

    constructor(private http: Http) {
    }

    public getUserDrive(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/drive',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/drive',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/drive',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getGroupDrive(accessToken: string, groupId?: string, userPrincipalName?: string) {
            if ( groupId != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/groups/' + groupId + '/drive',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/groups/' + userPrincipalName + '/drive',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getUserDriveChildenItems(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/drive/root/children',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/drive/root/children',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/drive/root/children',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getUserDriveItemWithID(accessToken: string, itemId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/drive/items' + itemId + '/children',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/drive/items' + itemId + '/children',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/drive/items' + itemId + '/children',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    /* TODO  

    GET /me/drive/root:/{item-path}:/children
    GET /drives/{drive-id}/items/{item-id}/children
    GET /groups/{group-id}/drive/root/children
    GET /groups/{group-id}/drive/items/{item-id}

    */
}
