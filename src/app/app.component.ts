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
              <a class="mdl-navigation__link" [routerLink]="['/mail']">Mail</a>
            </nav>
        </div>

        <router-outlet></router-outlet>
  `,
  styleUrls: [ './styles/main.css' ]
})
export class AppComponent  {
    constructor ( private _msalService: MSALService) {
    }

    login () {
        this._msalService.login();
    }

}
