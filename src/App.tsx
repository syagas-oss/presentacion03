import React from 'react';
import Background3D from './components/Background3D';
import Section from './components/Section';
import { RevenueChart, CapexChart } from './components/FinancialCharts';
import KPIGrid from './components/KPIGrid';
import { content } from './data/content';

function App() {
  return (
    <main className="relative w-full font-sans text-slate-800 bg-transparent overflow-x-hidden">
      {/* Fixed 3D Background */}
      <Background3D />

      {/* Scrollable Overlay Content */}
      <div className="relative z-10 w-full">
        
        {/* Intro */}
        <Section data={content.narrative[0]} />

        {/* Vision & Transformation */}
        <Section data={content.narrative[1]} />

        {/* User Problem */}
        <Section data={content.narrative[2]} />

        {/* The Solution */}
        <Section data={content.narrative[3]} />

        {/* Financial Context */}
        <Section data={content.narrative[4]} />

        {/* Chart: Revenue */}
        <Section data={content.narrative[5]}>
           <RevenueChart data={content.financials.revenueProjection} />
        </Section>

        {/* Chart: CAPEX */}
        <Section data={content.narrative[6]}>
            <CapexChart data={content.financials.capex} />
        </Section>

        {/* KPIs */}
        <Section data={content.narrative[7]}>
            <KPIGrid kpis={content.kpis} />
        </Section>

         {/* Closing */}
         <Section data={content.narrative[8]} />

        {/* Footer */}
        <footer className="py-12 text-center text-nestle-blue/60 text-sm backdrop-blur-md bg-white/30">
            <p>Nestlé Health Science © {new Date().getFullYear()} - Confidential Internal Document</p>
        </footer>
      </div>
    </main>
  );
}

export default App;