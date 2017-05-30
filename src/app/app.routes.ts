import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import { CalendarComponent } from './calendar.component';

// Route Configuration
export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'calendar', component: CalendarComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
