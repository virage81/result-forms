import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { routes } from './core/routes';
import './styles/index.css';
import './styles/tailwind.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>
);
