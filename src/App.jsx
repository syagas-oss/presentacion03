import React from 'react';
import Background3D from './components/Background3D';
import Section from './components/Section';
import { IncomeChart, CapexChart } from './components/FinancialChart';
import { content } from './data/content';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative w-full font-sans text-white overflow-x-hidden selection:bg-bio-gold selection:text-black">
      {/* 3D Background Layer */}
      <Background3D />

      {/* Content Overlay */}
      <div className="relative z-10">
        
        {/* HERO */}
        <Section data={content.narrative[0]} className="text-center items-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 px-6 py-3 rounded-full border border-bio-gold/50 text-bio-gold text-sm font-medium bg-bio-gold/10 inline-block backdrop-blur-sm"
          >
            {content.narrative[0].highlight}
          </motion.div>
        </Section>

        {/* NARRATIVE BLOCKS */}
        {content.narrative.slice(1).map((item) => (
          <Section key={item.id} data={item} />
        ))}

        {/* FINANCIALS - REVENUE */}
        <Section data={{ title: "Plan de Crecimiento", subtitle: "Proyección a 10 Años", icon: "Activity" }}>
          <p className="text-gray-300 mb-8 text-lg">
            Buscamos alcanzar la rentabilidad en el año 3 y escalar exponencialmente hasta los 17.4M€ en ingresos para el año 10, basados en un modelo de suscripción recurrente.
          </p>
          <IncomeChart />
        </Section>

        {/* FINANCIALS - KPIs & CAPEX */}
        <Section data={{ title: "Viabilidad Financiera", subtitle: "KPIs Clave", text: "Un modelo sólido con retorno de inversión claro entre el año 6 y 7.", icon: "CheckCircle" }}>
          
          {/* KPI Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-12">
            {content.kpis.map((kpi, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
                <div className="text-2xl md:text-3xl font-bold text-bio-light-blue mb-1">{kpi.value}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide font-semibold">{kpi.label}</div>
              </div>
            ))}
          </div>

          <CapexChart />
        </Section>

        {/* FOOTER */}
        <footer className="py-20 text-center text-gray-500 text-sm">
          <p>Nestlé Health Science © 2024</p>
          <p>Confidencial - Solo para uso interno</p>
        </footer>
      </div>
    </div>
  );
}

export default App;