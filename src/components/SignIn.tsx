import type { FormEvent } from 'react';
import { Button, Input } from './ui';

type Props = {
	onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

export const SignIn = ({ onSubmit }: Props) => {
	return (
		<form className='flex flex-col gap-2' onSubmit={onSubmit}>
			<Input name='email' type='email' label='Email' />
			<Input name='password' type='password' label='Password' />
			<Button type='submit'>Submit</Button>
		</form>
	);
};
