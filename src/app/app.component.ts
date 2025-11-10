import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="app-container">
      <app-sidebar></app-sidebar>
      <div class="main-content">
        <app-header *ngIf="showHeader"></app-header>
        <div class="content-wrapper">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      height: 100vh;
      overflow: hidden;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .content-wrapper {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      background: #f5f7fa;
    }
  `]
})
export class AppComponent {
  title = 'Memphis Portal';
  showHeader = true;

  constructor(private router: Router) {
    // Listen to route changes to show/hide header
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // Pages with custom headers should hide the main dashboard header
      const pagesWithCustomHeaders = [
        '/safety/life-saving-appliances',
        '/mdm/service-type',
        '/mdm/equipment-category',
        '/mdm/equipment',
        '/mdm/maker',
        '/mdm/cost-category'
      ];
      
      // Check if current route matches any page with custom header
      this.showHeader = !pagesWithCustomHeaders.some(page => event.url.includes(page));
    });
  }
}