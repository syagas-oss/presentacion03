import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Building, AlertCircle, CheckCircle, Users } from 'lucide-react';

const icons = {
  Building: Building,
  AlertCircle: AlertCircle,
  CheckCircle: CheckCircle,
  Users: Users,
  Activity: Activity
};

export default function Section({ data, children, className = "" }) {
  const IconComponent = data.icon ? icons[data.icon] : null;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen flex flex-col justify-center px-6 py-20 max-w-4xl mx-auto ${className}`}
    >
      <div className="bg-bio-dark/40 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-bio-blue/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

        {IconComponent && (
          <div className="mb-6 inline-flex p-3 rounded-lg bg-bio-blue/20 text-bio-light-blue">
            <IconComponent size={32} />
          </div>
        )}

        {data.subtitle && (
          <h3 className="text-bio-gold font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">
            {data.subtitle}
          </h3>
        )}
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {data.title}
        </h2>

        {data.text && (
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            {data.text}
          </p>
        )}

        {children}
      </div>
    </motion.section>
  );
}