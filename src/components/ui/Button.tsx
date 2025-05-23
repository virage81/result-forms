import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
	className?: string;
	to?: string;
}

export const Button: FC<Props> = ({ className, to, children }) => {
	const styles = `flex place-items-center border-2 border-purple-500 px-5 py-2 rounded-md transition-all hover:bg-purple-900 ${className}`;

	if (typeof to !== 'undefined')
		return (
			<NavLink to={to} className={styles}>
				{children}
			</NavLink>
		);

	return <button className={styles}>{children}</button>;
};
