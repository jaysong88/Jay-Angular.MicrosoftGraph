import { Injectable } from '@angular/core';

declare const Msal: any;


@Injectable()
export class MSALService {
    private applicationConfig: any = {
        clientID: 'd33e6d35-a0a2-431b-9185-0d3e2b4148a0',
        graphScopes: ['Directory.AccessAsUser.All', 'Calendars.ReadWrite.Shared', 'Contacts.ReadWrite', 'Sites.ReadWrite.All']
    };

    private app: any;

    constructor() {
        this.app = new Msal.UserAgentApplication(this.applicationConfig.clientID, '', () => {
        });
    }

        /*
        Tenant Name: SPE178564
        Username: admin@SPE178564.onmicrosoft.com Password: jay.song@1988 
    */

    public login() {
        return this.app.loginPopup(this.applicationConfig.graphScopes)
            .then( (token: any) => {
                this.getToken().then((accessToken: any) => {
                    localStorage.setItem('accessToken', accessToken);
                });
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
