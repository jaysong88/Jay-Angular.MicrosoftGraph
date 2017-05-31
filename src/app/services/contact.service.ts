import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ContactService {

    constructor(private http: Http) {
    }

    public getAllContacts(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/contacts',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/contacts',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/contacts',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getAllContactsInSpecifiedFolder(accessToken: string, contactFolderId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/contactfolders/' + contactFolderId + '/contacts',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName +
                 '/contactfolders/' + contactFolderId + '/contacts',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/contactfolders/' + contactFolderId + '/contacts',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public createContact(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/contacts', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/contacts', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/contacts', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            }
    }

    public createContactsInSpecifiedFolder(accessToken: string, body: any,
                     contactFolderId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/contactfolders/' +
                 contactFolderId + '/contacts', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json'}) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName +
                 '/contactfolders/' + contactFolderId + '/contacts', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/contactfolders/' + contactFolderId + '/contacts', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            }
    }

    public getAllContactFolders(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/contactFolders',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/contactFolders',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/contactFolders',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public createContactFolder(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/contactFolders', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/contactFolders', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/contactFolders', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }
}
