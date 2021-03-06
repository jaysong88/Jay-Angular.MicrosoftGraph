import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SharePointService {

    constructor(private http: Http) {
    }

    getSharePointRootSite(accessToken: string, tenant?: string) {
            if (tenant != null ) {
                return this.http.get('https://graph.microsoft.com/v1.0/sites/' + tenant,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }  else {
                return this.http.get('https://graph.microsoft.com/v1.0/sites/root',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }) });
            }
    }

    getSharePointSiteWithId(accessToken: string, id: string) {
           return this.http.get('https://graph.microsoft.com/v1.0/sites/' + id,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
            });
    }

    getGroupTeamSiteWithId(accessToken: string, groupId: string) {
           return this.http.get('https://graph.microsoft.com/v1.0/groups/' + groupId + 'sites/root',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
            });
    }

    getSubsites(accessToken: string, id: string) {
            return this.http.get('https://graph.microsoft.com/v1.0/sites/' + id + '/sites',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
            });
    }

    getSharePointList(accessToken: string, siteId: string, listId: string) {
            return this.http.get('https://graph.microsoft.com/beta/sites/' + siteId + '/lists/' + listId,
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
            });
    }

    getSharePointListItems(accessToken: string, siteId: string, listId: string) {
            return this.http.get('https://graph.microsoft.com/beta/sites/' + siteId + '/lists/' + listId + '/items',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
            });
    }

    createSharePointList(accessToken: string, body: any, siteId: string) {
            return this.http.post('https://graph.microsoft.com/beta/sites/' + siteId + '/lists/', body, 
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
            });
    }

    getSharePointListItem(accessToken: string, siteId: string, listId: string, itemId: string) {
            return this.http.get('https://graph.microsoft.com/beta/sites/' + siteId + '/lists/' + listId + '/items',
                { headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
            });
    }

}
