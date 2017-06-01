import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SchemaExtensionService {

    constructor(private http: Http) {
    }

    /*    Microsoft Graph Users          */

    public getAllSchemaExtensions(accessToken: string) {
            return this.http.get('https://graph.microsoft.com/v1.0/schemaExtensions',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
    }

    public createNewExtension(accessToken: string, body: any) {
            return this.http.post('https://graph.microsoft.com/v1.0/schemaExtensions', body,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken , 'Content-Type': 'application/json' }) });
    }

    public getSchemaExtensionById(accessToken: string, id: string) {
            return this.http.get('https://graph.microsoft.com/beta/schemaExtensions/' + id,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
    }

    public deleteNewExtension(accessToken: string, id: string) {
            return this.http.delete('https://graph.microsoft.com/v1.0/schemaExtensions/' + id,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
    }
}
