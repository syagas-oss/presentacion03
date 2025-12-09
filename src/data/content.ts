import { AppContent } from '../types';

export const content: AppContent = {
  narrative: [
    {
      id: "intro",
      title: "BioLife",
      type: "intro",
      body: [
        "El copiloto digital de salud preventiva de Nestlé Health Science.",
        "Convierte datos, ciencia y productos en planes reales para la vida diaria."
      ],
      highlight: "Transformación Digital Release 3"
    },
    {
      id: "vision",
      title: "La Transformación",
      type: "text",
      body: [
        "Nestlé Health Science evoluciona: pasamos de ser una empresa de productos a una plataforma de salud preventiva personalizada.",
        "Generamos una nueva línea de negocio digital, basada en datos y relaciones recurrentes con el usuario."
      ],
      highlight: "De Productos a Plataforma"
    },
    {
      id: "problem",
      title: "El Desafío del Usuario",
      type: "text",
      body: [
        "El usuario moderno enfrenta ruido informativo y consejos contradictorios.",
        "Nuestro Target: 'Busy Performers' (profesionales sin tiempo), buscadores de reseteo metabólico y padres con vidas intensas.",
        "Necesitan claridad, planes accionables y la confianza clínica de NHSc."
      ]
    },
    {
      id: "solution",
      title: "La Solución BioLife",
      type: "text",
      body: [
        "En menos de 90 segundos, mediante un onboarding conversacional, entendemos la situación básica: energía, digestión, sueño.",
        "Entregamos una 'Radiografía BioLife' y un plan simple con 3 hábitos + recomendación de producto.",
        "No es solo una app, es un motor de demanda para nuestros canales existentes."
      ]
    },
    {
      id: "financials-intro",
      title: "Proyección Financiera",
      type: "text",
      body: [
        "Un modelo escalable basado en suscripción (12,99€/mes) y venta cruzada.",
        "Objetivo: Alcanzar rentabilidad (Break Even) en el Año 3."
      ]
    },
    {
      id: "chart-revenue",
      title: "Crecimiento de Ingresos (10 Años)",
      type: "chart-revenue",
      body: [
        "Crecimiento exponencial de usuarios e ingresos recurrente.",
        "Para el Año 10, proyectamos superar los 17M€ en facturación total."
      ]
    },
    {
      id: "chart-capex",
      title: "Inversión Inicial (CAPEX)",
      type: "chart-capex",
      body: [
        "Inversión total estimada de 3.02M€ para el lanzamiento.",
        "Foco en Equipo Inicial, IA Explicable y Desarrollo de la App."
      ]
    },
    {
      id: "kpis",
      title: "Indicadores Clave",
      type: "kpi",
      body: [
        "El proyecto recupera toda la inversión inicial entre el año 6 y 7.",
        "Alta rentabilidad a largo plazo con márgenes operativos superiores al 40%."
      ]
    },
    {
      id: "closing",
      title: "Conclusión",
      type: "text",
      body: [
        "BioLife acelera la madurez digital de NHSc.",
        "Construimos un activo de datos propio y un nuevo canal de ingresos recurrentes."
      ],
      highlight: "Ciencia + Datos + Vida Real"
    }
  ],
  // Data extracted from PDF Page 2 (Plan Ingresos) & Page 4 (Opex) & Page 5 (EBITDA)
  financials: {
    revenueProjection: [
      { year: 'Año 1', revenue: 101100, opex: 2120000, ebitda: -2018900, users: 1000 }, // Opex approx to match loss
      { year: 'Año 2', revenue: 1112100, opex: 2400000, ebitda: -1287900, users: 10000 },
      { year: 'Año 3', revenue: 2183760, opex: 2600000, ebitda: -416240, users: 18000 },
      { year: 'Año 4', revenue: 4246200, opex: 2900000, ebitda: 1346200, users: 30000 },
      { year: 'Año 5', revenue: 6066000, opex: 3120000, ebitda: 2946000, users: 40000 },
      { year: 'Año 6', revenue: 8340750, opex: 3120000, ebitda: 3364500, users: 55000 }, // Fixed Opex from PDF pg 4
      { year: 'Año 7', revenue: 10615500, opex: 3320000, ebitda: 4933000, users: 70000 },
      { year: 'Año 8', revenue: 12890250, opex: 3520000, ebitda: 6501500, users: 85000 },
      { year: 'Año 9', revenue: 15165000, opex: 3720000, ebitda: 8070000, users: 100000 },
      { year: 'Año 10', revenue: 17439750, opex: 3900000, ebitda: 9658500, users: 115000 },
    ],
    // Data extracted from PDF Page 3 (CAPEX)
    capex: [
      { name: "Equipo Inicial", value: 735000 },
      { name: "Motor Clínico + IA", value: 500000 },
      { name: "App Completa V1", value: 450000 },
      { name: "Marketing Lanzamiento", value: 450000 },
      { name: "Back-end & Microservicios", value: 350000 },
      { name: "Integraciones HL7", value: 300000 },
      { name: "Hardware (BioLife Points)", value: 175000 },
      { name: "Desarrollo MVP", value: 60000 },
    ]
  },
  // Data extracted from PDF Page 5 (VAN/TIR)
  kpis: [
    { label: "VAN (8%)", value: "14,1 M€", subtext: "Valor Actual Neto" },
    { label: "TIR (IRR)", value: "30,84%", subtext: "Tasa Interna de Retorno" },
    { label: "Payback", value: "Año 6-7", subtext: "Recuperación de inversión" },
    { label: "EBITDA Año 10", value: "9,6 M€", subtext: "Margen operativo >50%" }
  ]
};