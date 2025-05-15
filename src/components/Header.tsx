import { Button } from './ui';

export const Header = () => {
	return (
		<header className='min-h-10 flex items-center justify-between absolute inset-x-0 z-10 px-10 py-5'>
			<h3 className='font-bold text-xl'>Forms Practice</h3>
			<nav className='flex items-center gap-5'>
				<Button to='/sign-in'>Sign In</Button>
				<Button to='/sign-up'>Sign Up</Button>
			</nav>
		</header>
	);
};
