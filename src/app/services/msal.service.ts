import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

declare const Msal: any;


@Injectable()
export class MSALService {
    private applicationConfig: any = {
        clientID: 'd33e6d35-a0a2-431b-9185-0d3e2b4148a0',
        graphScopes: ['Directory.AccessAsUser.All', 'Calendars.ReadWrite', 'Calendars.ReadWrite.Shared']
    };

    private app: any;

    constructor(private http: Http) {

        this.app = new Msal.UserAgentApplication(this.applicationConfig.clientID, '', () => {
        });
    }

    public login() {
        return this.app.loginPopup(this.applicationConfig.graphScopes)
            .then( (token: any) => {
                const user = this.app.getUser();
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }, (): void => {
                return null;
            });
    }

    public logout() {
        this.app.logout();
    }

    public getToken() {
         return this.app.acquireTokenSilent(this.applicationConfig.graphScopes)
            .then((accessToken: any) => {
                return accessToken;
            }, (error: any) => {
                return this.app.acquireTokenPopup(this.applicationConfig.graphScopes)
                    .then((accessToken: any) => {
                        return accessToken;
                    }, (err: any) => {
                        console.error(err);
                    });
            });
    }

}
