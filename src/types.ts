export interface FinancialData {
  year: string;
  revenue: number;
  opex: number;
  ebitda: number;
  users: number;
  [key: string]: any;
}

export interface CapexItem {
  name: string;
  value: number;
  [key: string]: any;
}

export interface KPI {
  label: string;
  value: string;
  subtext: string;
}

export interface ContentSection {
  id: string;
  title: string;
  body: string[];
  type: 'intro' | 'text' | 'chart-revenue' | 'chart-capex' | 'kpi' | 'closing';
  highlight?: string;
}

export interface AppContent {
  narrative: ContentSection[];
  financials: {
    revenueProjection: FinancialData[];
    capex: CapexItem[];
  };
  kpis: KPI[];
}