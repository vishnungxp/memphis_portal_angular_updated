import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LifeSavingAppliancesComponent } from './components/life-saving-appliances/life-saving-appliances.component';
import { ServiceTypeComponent } from './components/mdm/service-type/service-type.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'safety/life-saving-appliances', component: LifeSavingAppliancesComponent },
  { path: 'mdm/service-type', component: ServiceTypeComponent },
  { path: '**', redirectTo: '/dashboard' }
];