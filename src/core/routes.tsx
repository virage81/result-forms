import { SignInPage, SignUpPage } from '@/pages';
import { Layout } from '@/pages/Layout';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				path: '/sign-in',
				element: <SignInPage />,
			},
			{
				path: '/sign-up',
				element: <SignUpPage />,
			},
		],
	},
]);
