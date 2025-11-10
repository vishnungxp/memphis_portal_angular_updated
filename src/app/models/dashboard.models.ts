export interface NavigationData {
  label: string;
  due: number;
  soon: number;
}

export interface ServiceRenewalData {
  days: number;
  count: number;
  color: string;
}

export interface VesselDueData {
  vessel: string;
  count: number;
}

export interface AnalysisData {
  category: string;
  done: number;
  notDone: number;
}

export interface AnnualWindowData {
  status: string;
  count: number;
  color: string;
}

export interface AccountOverviewData {
  type: string;
  amount: number;
  invoices: number;
  color: string;
}