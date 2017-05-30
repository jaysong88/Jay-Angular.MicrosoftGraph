import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
        <div class="mdl-layout__header-row">

            <!-- Navigation with router directives-->
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" [routerLink]="['/']">Home</a>
              <a class="mdl-navigation__link" [routerLink]="['/user']">Users</a>
              <a class="mdl-navigation__link" [routerLink]="['/calendar']">Calendars</a>
            </nav>
        </div>
        <router-outlet></router-outlet>
  `,
})
export class AppComponent  { }
