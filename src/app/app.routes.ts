import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LifeSavingAppliancesComponent } from './components/life-saving-appliances/life-saving-appliances.component';
import { ServiceTypeComponent } from './components/mdm/service-type/service-type.component';
import { EquipmentCategoryComponent } from './components/mdm/equipment-category/equipment-category.component';
import { EquipmentComponent } from './components/mdm/equipment/equipment.component';
import { MakerComponent } from './components/mdm/maker/maker.component';
import { CostCategoryComponent } from './components/mdm/cost-category/cost-category.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'safety/life-saving-appliances', component: LifeSavingAppliancesComponent },
  { path: 'mdm/service-type', component: ServiceTypeComponent },
  { path: 'mdm/equipment-category', component: EquipmentCategoryComponent },
  { path: 'mdm/equipment', component: EquipmentComponent },
  { path: 'mdm/maker', component: MakerComponent },
 { path: 'mdm/cost-category', component: CostCategoryComponent },
  { path: '**', redirectTo: '/dashboard' }
];