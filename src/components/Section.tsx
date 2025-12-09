import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ContentSection } from '../types';
import { ArrowRight, Activity, TrendingUp, CheckCircle, Brain } from 'lucide-react';

interface SectionProps {
  data: ContentSection;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ data, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = () => {
    switch(data.id) {
        case 'vision': return <Activity className="w-8 h-8 text-nestle-accent mb-4" />;
        case 'solution': return <Brain className="w-8 h-8 text-nestle-accent mb-4" />;
        case 'kpis': return <TrendingUp className="w-8 h-8 text-nestle-accent mb-4" />;
        case 'closing': return <CheckCircle className="w-8 h-8 text-nestle-green mb-4" />;
        default: return null;
    }
  }

  return (
    <section 
      ref={ref}
      className={`min-h-screen flex flex-col justify-center items-center p-6 md:p-12 relative ${data.type === 'intro' ? 'text-center' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
            max-w-4xl w-full
            ${data.type !== 'intro' ? 'bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-12 border border-white/50' : ''}
        `}
      >
        {data.type === 'intro' ? (
             <div className="flex flex-col items-center">
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-8"
                >
                    <span className="text-nestle-blue font-bold tracking-widest text-sm uppercase mb-2 block">Nestlé Health Science</span>
                    <h1 className="text-6xl md:text-8xl font-bold text-nestle-blue bg-clip-text text-transparent bg-gradient-to-r from-nestle-blue to-nestle-accent pb-2">
                    {data.title}
                    </h1>
                </motion.div>
                
                {data.highlight && (
                    <span className="inline-block px-4 py-1 rounded-full bg-nestle-blue text-white text-sm font-semibold tracking-wide mb-6">
                        {data.highlight}
                    </span>
                )}
             </div>
        ) : (
            <>
                <div className="flex items-center gap-4 mb-6">
                    {getIcon()}
                    <h2 className="text-3xl md:text-4xl font-bold text-nestle-blue">
                        {data.title}
                    </h2>
                </div>
                
                {data.highlight && (
                    <div className="mb-6">
                         <span className="px-3 py-1 bg-nestle-light text-nestle-blue rounded-md font-semibold text-sm border border-nestle-blue/20">
                            {data.highlight}
                        </span>
                    </div>
                )}
            </>
        )}

        <div className={`space-y-4 ${data.type === 'intro' ? 'text-xl md:text-2xl text-slate-700 font-light' : 'text-lg text-slate-700'}`}>
          {data.body.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Inject Charts or Extra Content */}
        {children && (
            <div className="mt-8 w-full">
                {children}
            </div>
        )}
      </motion.div>
      
      {data.type === 'intro' && (
           <motion.div 
           animate={{ y: [0, 10, 0] }} 
           transition={{ repeat: Infinity, duration: 2 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-nestle-blue/50"
         >
           <div className="flex flex-col items-center">
             <span className="text-sm mb-2">Descubrir</span>
             <ArrowRight className="rotate-90" />
           </div>
         </motion.div>
      )}
    </section>
  );
};

export default Section;