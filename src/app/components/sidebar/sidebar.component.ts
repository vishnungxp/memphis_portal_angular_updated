import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
menuItems = [
  { 
    name: 'Dashboard', 
    icon: 'dashboard', 
    route: '/dashboard',
    active: false, 
    hasSubmenu: false 
  },
  { 
    name: 'Safety', 
    icon: 'security', 
    active: false, 
    hasSubmenu: true, 
    expanded: false,
    submenu: [
      { name: 'Life Saving Appliances', route: '/safety/life-saving-appliances' }
    ]
  },
  { name: 'Navigation', icon: 'navigation', active: false, hasSubmenu: false },
  { 
    name: 'MDM', 
    icon: 'dns', 
    active: false, 
    hasSubmenu: true, 
    expanded: false,
    submenu: [
      { name: 'Service Type', route: '/mdm/service-type' },
      { name: 'Equipment Category', route: '/mdm/equipment-category' },
      { name: 'Equipment', route: '/mdm/equipment' },
      { name: 'Maker', route: '/mdm/maker' },
      { name: 'Cost Category', route: '/mdm/cost-category' }
    ]
  },
  { name: 'Administration', icon: 'admin_panel_settings', active: false, hasSubmenu: false },
  { name: 'Accounts', icon: 'account_balance', active: false, hasSubmenu: false },
  { name: 'Report', icon: 'assessment', active: false, hasSubmenu: false }
];

  toggleSubmenu(item: any) {
    if (item.hasSubmenu) {
      item.expanded = !item.expanded;
    }
  }

  selectMenuItem(item: any) {
    this.menuItems.forEach(i => i.active = false);
    item.active = true;
  }
}