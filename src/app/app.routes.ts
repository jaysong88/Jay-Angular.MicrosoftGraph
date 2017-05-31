import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { CalendarComponent } from './calendar.component';
import { ContactComponent } from './contact.component';
import { SharePointComponent } from './sharepoint.component';
import { MailComponent } from './mail.component';

// Route Configuration
export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sharepoint', component: SharePointComponent },
  { path: 'mail', component: MailComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
