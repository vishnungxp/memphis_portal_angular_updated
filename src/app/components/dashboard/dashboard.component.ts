import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationChartComponent } from '../widgets/navigation-chart/navigation-chart.component';
import { ServiceRenewalChartComponent } from '../widgets/service-renewal-chart/service-renewal-chart.component';
import { TopVesselsChartComponent } from '../widgets/top-vessels-chart/top-vessels-chart.component';
import { AnalysisChartComponent } from '../widgets/analysis-chart/analysis-chart.component';
import { AnnualWindowChartComponent } from '../widgets/annual-window-chart/annual-window-chart.component';
import { AccountOverviewChartComponent } from '../widgets/account-overview-chart/account-overview-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NavigationChartComponent,
    ServiceRenewalChartComponent,
    TopVesselsChartComponent,
    AnalysisChartComponent,
    AnnualWindowChartComponent,
    AccountOverviewChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}