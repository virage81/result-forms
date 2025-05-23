import { Home, SignInPage, SignUpPage } from '@/pages';
import { Layout } from '@/pages/Layout';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/sign-in',
				element: <SignInPage />,
			},
			{
				path: '/sign-up/',
				element: <SignUpPage />,
			},
		],
	},
]);
