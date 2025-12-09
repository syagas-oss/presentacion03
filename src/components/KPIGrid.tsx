import React from 'react';
import { KPI } from '../types';

interface KPIGridProps {
  kpis: KPI[];
}

const KPIGrid: React.FC<KPIGridProps> = ({ kpis }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-white/80 p-4 rounded-lg shadow-sm border border-nestle-blue/10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{kpi.label}</span>
          <span className="text-3xl font-bold text-nestle-blue my-2">{kpi.value}</span>
          <span className="text-xs text-slate-400">{kpi.subtext}</span>
        </div>
      ))}
    </div>
  );
};

export default KPIGrid;