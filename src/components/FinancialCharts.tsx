import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie, Legend } from 'recharts';
import { FinancialData, CapexItem } from '../types';

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M€`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k€`;
  return `${value}€`;
};

interface RevenueChartProps {
  data: FinancialData[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/60">
      <h3 className="text-nestle-blue font-bold mb-4 text-center">Proyección de Ingresos vs EBITDA (Acumulado)</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#005CB9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#005CB9" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorEbitda" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00A3E0" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00A3E0" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="year" tick={{fontSize: 12}} />
          <YAxis tickFormatter={formatCurrency} tick={{fontSize: 12}} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ccc" />
          <Tooltip 
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          />
          <Legend />
          <Area type="monotone" dataKey="revenue" name="Ingresos Totales" stroke="#005CB9" fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dataKey="ebitda" name="EBITDA" stroke="#00A3E0" fillOpacity={1} fill="url(#colorEbitda)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

interface CapexChartProps {
  data: CapexItem[];
}

const COLORS = ['#005CB9', '#0075E8', '#008FF5', '#00A3E0', '#33BBE6', '#66D2ED', '#99E9F4', '#C5A900'];

export const CapexChart: React.FC<CapexChartProps> = ({ data }) => {
    // Sort data for better visualization
    const sortedData = [...data].sort((a, b) => b.value - a.value);

  return (
    <div className="w-full h-[400px] bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/60">
      <h3 className="text-nestle-blue font-bold mb-4 text-center">Distribución de Inversión Inicial (CAPEX)</h3>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={sortedData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {sortedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
             formatter={(value: number) => formatCurrency(value)}
             contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          />
          <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{fontSize: '11px', maxWidth: '40%'}}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};