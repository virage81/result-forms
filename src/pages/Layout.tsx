import { Header } from '@/components/Header';
import { Outlet } from 'react-router';

export const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};
