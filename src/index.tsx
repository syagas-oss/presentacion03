import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log("Iniciando aplicación BioLife...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("ERROR CRÍTICO: No se encontró el elemento #root");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Aplicación montada correctamente.");
} catch (e) {
  console.error("Error al renderizar la App:", e);
}