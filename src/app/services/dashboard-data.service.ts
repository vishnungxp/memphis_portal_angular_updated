import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  NavigationData,
  ServiceRenewalData,
  VesselDueData,
  AnalysisData,
  AnnualWindowData,
  AccountOverviewData
} from '../models/dashboard.models';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  getNavigationData(): Observable<NavigationData[]> {
    return of([
      { label: 'SMC1', due: 180, soon: 120 },
      { label: 'SMC2', due: 150, soon: 100 },
      { label: 'SMC3', due: 200, soon: 140 },
      { label: 'SMC4', due: 170, soon: 110 },
      { label: 'SMC5', due: 160, soon: 130 }
    ]);
  }

  getServiceRenewalData(): Observable<ServiceRenewalData[]> {
    return of([
      { days: 30, count: 30, color: '#4A90E2' },
      { days: 15, count: 87, color: '#f39c12' },
      { days: 7, count: 87, color: '#ff7979' }
    ]);
  }

  getTopVesselsDueData(): Observable<VesselDueData[]> {
    return of([
      { vessel: 'Elisabeth Schulte', count: 179 },
      { vessel: 'Elisabeth Schulte', count: 161 },
      { vessel: 'Elisabeth Schulte', count: 132 },
      { vessel: 'Elisabeth Schulte', count: 87 },
      { vessel: 'Elisabeth Schulte', count: 72 },
      { vessel: 'Elisabeth Schulte', count: 54 },
      { vessel: 'Elisabeth Schulte', count: 29 }
    ]);
  }

  getAnalysisData(): Observable<AnalysisData[]> {
    return of([
      { category: 'Fresh Water', done: 70, notDone: 30 },
      { category: 'Sewage Water', done: 40, notDone: 60 }
    ]);
  }

  getAnnualWindowData(): Observable<AnnualWindowData[]> {
    return of([
      { status: 'Pending', count: 802, color: '#4A90E2' },
      { status: 'Completed', count: 802, color: '#00bcd4' }
    ]);
  }

  getAccountOverviewData(): Observable<AccountOverviewData[]> {
    return of([
      { type: 'Paid Amount', amount: 25120, invoices: 30, color: '#2ecc71' },
      { type: 'Issued Purchase', amount: 25120, invoices: 30, color: '#f39c12' },
      { type: 'Overdue', amount: 25120, invoices: 30, color: '#4A90E2' }
    ]);
  }
}