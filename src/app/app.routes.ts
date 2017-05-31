import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { CalendarComponent } from './calendar.component';
import { ContactComponent } from './contact.component';

// Route Configuration
export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component: ContactComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
