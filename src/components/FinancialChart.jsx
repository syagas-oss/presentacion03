import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { content } from '../data/content';

const formatCurrency = (value) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M€`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k€`;
  return `${value}€`;
};

export const IncomeChart = () => (
  <div className="h-[400px] w-full bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl">
    <h3 className="text-xl font-bold text-white mb-4">Proyección de Ingresos (10 Años)</h3>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={content.financials.revenueCurve}>
        <defs>
          <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#005CA9" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#005CA9" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" vertical={false} />
        <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={formatCurrency} tickLine={false} axisLine={false} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155', borderRadius: '8px' }}
          itemStyle={{ color: '#E1F5FE' }}
          formatter={(value) => formatCurrency(value)}
        />
        <Area 
          type="monotone" 
          dataKey="ingresos" 
          stroke="#4FC3F7" 
          fillOpacity={1} 
          fill="url(#colorIngresos)" 
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export const CapexChart = () => (
  <div className="h-[400px] w-full bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl mt-8">
    <h3 className="text-xl font-bold text-white mb-4">Desglose de Inversión Inicial (CAPEX)</h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={content.financials.capexBreakdown} layout="vertical" margin={{ left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" horizontal={true} vertical={false} />
        <XAxis type="number" stroke="#94a3b8" fontSize={10} tickFormatter={formatCurrency} hide />
        <YAxis type="category" dataKey="name" stroke="#e2e8f0" fontSize={11} width={120} tickLine={false} axisLine={false} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155', borderRadius: '8px' }}
          cursor={{fill: 'transparent'}}
          formatter={(value) => formatCurrency(value)}
        />
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {content.financials.capexBreakdown.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#005CA9' : '#D4AF37'} />
            ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);