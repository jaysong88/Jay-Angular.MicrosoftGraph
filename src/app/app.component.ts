import { Component } from '@angular/core';
import { MSALService } from './services/msal.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'my-app',
  providers : [MSALService],
  template: `
        <div class="mdl-layout__header-row">
            <!-- Navigation with router directives-->
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" [routerLink]="['/']">Home</a>
              <a class="mdl-navigation__link" [routerLink]="['/user']">Users</a>
              <a class="mdl-navigation__link" [routerLink]="['/calendar']">Calendars</a>
              <a class="mdl-navigation__link" [routerLink]="['/contact']">Contacts</a>
              <a class="mdl-navigation__link" [routerLink]="['/sharepoint']">SharePoint</a>
            </nav>
        </div>

        <router-outlet></router-outlet>
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
export class AppComponent  {
    constructor ( private _msalService: MSALService) {
    }

    login () {
        this._msalService.login();
    }

}
