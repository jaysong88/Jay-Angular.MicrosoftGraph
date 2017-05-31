import { Component } from '@angular/core';
import { Site } from './interfaces/sharepoint.interface';
import { MSALService } from './services/msal.service';
import { SharePointService } from './services/sharepoint.service';

@Component({
  selector: 'my-sharepoint',
  providers : [MSALService, SharePointService],
  template: `
    <h1>SharePoin Site Information</h1>
    <div>
        <button (click)="login()">Login</button>
        <button (click)="getRootSite()">Get Sites</button>
        <button (click)="getSubSites()">Get All SubSites</button>
    </div>
    <div *ngIf="anySite">
        <div>
            <h3>Root Sites</h3>
            <ul>
                <li>ID: {{ site.id }} </li>
                <li>Name: {{ site.name }} </li>
                <li>Description: {{ site.description }} </li>
                <li>URL: {{ site.webUrl }} </li>
            </ul>
        </div>
        <div>
            <h3>All Sites</h3>
            <ul *ngFor="let site of sites">
                <li>ID: {{ site.id }} </li>
                <li>Name: {{ site.name }} </li>
                <li>Description: {{ site.description }} </li>
                <li>URL: {{ site.webUrl }} </li>
            </ul>
        </div>
    </div>
  `,
  styles: [`
         div { 
                background-color:#EFEFEF;
                margin-bottom:15px;
                padding:15px;
                border:1px solid #DDD;
                box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
                border-radius:3px;
            }
    `]
})
export class SharePointComponent  {
    anySite: boolean = false;
    site: Site;
    sites: Site[];
    SiteID: string;

    constructor ( private _msalService: MSALService, private _sharePointService: SharePointService) {
    }

    login () {
        this._msalService.login();
    }

    getRootSite() {
                this._sharePointService.getSharePointRootSite(localStorage.getItem('accessToken')).subscribe( res => {
                    this.anySite = true;
                    console.log(res.json());
                    this.site = res.json();
                });
    }

    getSubSites() {
                this._sharePointService.getSubsites(localStorage.getItem('accessToken'), this.site.id).forEach( res => {
                    this.anySite = true;
                    console.log(res.json());
                    this.sites = res.json().value;
                });
    }


}


