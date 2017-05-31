import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MailService {

    constructor(private http: Http) {
    }

    public getAllMessages(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/messages',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/messages',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/messages',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public getMessagesInMailFolder(accessToken: string, folderId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/mailFolders/' + folderId + '/messages',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName +
                 '/mailFolders/' + folderId + '/messages',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/mailFolders/' + folderId + '/messages',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public createMessage(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/messages', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/messages', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/messages', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            }
    }

    public createMessageInSpecifiedFolder(accessToken: string, body: any,
                     mailFolderId: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/mailFolders/' +
                 mailFolderId + '/messages', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json'}) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName +
                 '/mailFolders/' + mailFolderId + '/messages', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/mailFolders/' + mailFolderId + '/messages', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            }
    }

    public getAllOverrides(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/inferenceClassification/overrides',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/inferenceClassification/overrides',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/inferenceClassification/overrides',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public createOverride(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id +
                 '/inferenceClassification/overrides', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' +
                 userPrincipalName + '/inferenceClassification/overrides', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/inferenceClassification/overrides', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            }
    }

    public getAllMailFolders(accessToken: string, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + id + '/mailFolders',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else if ( userPrincipalName != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/mailFolders',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            } else {
                return this.http.get('https://graph.microsoft.com/v1.0/me/mailFolders',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    public createMailFolder(accessToken: string, body: any, id?: string, userPrincipalName?: string) {
            if ( id != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + id + '/mailFolders', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else if ( userPrincipalName != null ) {
                return this.http.post('https://graph.microsoft.com/v1.0/users/' + userPrincipalName + '/mailFolders', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            } else {
                return this.http.post('https://graph.microsoft.com/v1.0/me/mailFolders', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }) });
            }
    }
}
