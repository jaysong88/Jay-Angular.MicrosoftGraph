import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    /*    Microsoft Graph Users          */

    public getAllUsers(accessToken: string) {
            return this.http.get('https://graph.microsoft.com/v1.0/users',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
    }

    public getCurrentUserInformaion(accessToken: string) {
            return this.http.get('https://graph.microsoft.com/v1.0/me',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
    }

    public getCurrentUserManager(accessToken: string) {
            return this.http.get('https://graph.microsoft.com/v1.0/me/manager',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
    }

    public createNewUser(accessToken: string, body: any) {
            return this.http.post('https://graph.microsoft.com/v1.0/users', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
    }

    public deleteUser(accessToken: string, id: string) {
            return this.http.delete('https://graph.microsoft.com/v1.0/users/' + id,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
    }

    public updateUser(accessToken: string, body: any, id?: string) {
            if ( id != null) {
                return this.http.patch('https://graph.microsoft.com/v1.0/users/+ id', body,
                    { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            } else {
                return this.http.patch('https://graph.microsoft.com/v1.0/me', body,
                    { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
            }
    }

    public createNewSchema(accessToken: string, body: any) {
            return this.http.post('https://graph.microsoft.com/v1.0/schemaExtensions', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
    }


    /*   END -- Microsoft Graph Users    */
}
