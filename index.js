import React from 'react';
import { createRoot } from 'react-dom/client';
import TimezoneConverter from './TimezoneConverter';

const container = document.getElementById('root');
createRoot(container).render(<TimezoneConverter />);
