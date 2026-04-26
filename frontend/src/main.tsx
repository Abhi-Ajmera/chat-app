import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="bg-gray-200 text-red-600">hello</h1>
  </StrictMode>
);
