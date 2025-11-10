import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
      active: true, 
      hasSubmenu: false 
    },
    { 
      name: 'Safety', 
      icon: 'security', 
      route: '',
      active: false, 
      hasSubmenu: true, 
      expanded: false,
      submenu: [
        { name: 'Life Saving Appliances', route: '/safety/life-saving-appliances' }
      ]
    },
    { 
      name: 'Navigation', 
      icon: 'navigation',
      route: '',
      active: false, 
      hasSubmenu: false 
    },
    { 
      name: 'MDM', 
      icon: 'dns',
      route: '',
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
    { 
      name: 'Administration', 
      icon: 'admin_panel_settings',
      route: '',
      active: false, 
      hasSubmenu: false 
    },
    { 
      name: 'Accounts', 
      icon: 'account_balance',
      route: '',
      active: false, 
      hasSubmenu: false 
    },
    { 
      name: 'Report', 
      icon: 'assessment',
      route: '',
      active: false, 
      hasSubmenu: false 
    }
  ];

  constructor(private router: Router) {
    // Listen to route changes and update active state
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.updateActiveState(event.url);
    });
  }

  updateActiveState(currentUrl: string) {
    this.menuItems.forEach(item => {
      // Check main menu items
      if (item.route && currentUrl === item.route) {
        item.active = true;
      } else if (item.hasSubmenu && item.submenu) {
        // Check submenu items
        const hasActiveSubmenu = item.submenu.some(sub => currentUrl === sub.route);
        item.active = hasActiveSubmenu;
      } else {
        item.active = false;
      }
    });
  }

  toggleSubmenu(item: any, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    
    if (item.hasSubmenu) {
      item.expanded = !item.expanded;
    }
  }

  selectMenuItem(item: any, event?: Event) {
    if (event) {
      event.preventDefault();
    }

    // Clear all active states
    this.menuItems.forEach(i => i.active = false);
    
    // Set clicked item as active
    item.active = true;

    // Navigate if has route
    if (item.route && item.route !== '') {
      this.router.navigate([item.route]);
    } else if (item.hasSubmenu) {
      this.toggleSubmenu(item);
    }
  }

  selectSubmenuItem(parentItem: any, submenuItem: any, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Clear all active states
    this.menuItems.forEach(i => i.active = false);
    
    // Set parent as active
    parentItem.active = true;

    // Navigate to submenu route
    this.router.navigate([submenuItem.route]);
  }
}