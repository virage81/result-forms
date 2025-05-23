import type { FormEvent } from 'react';
import { Button, Input } from './ui';

export const SignIn = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		console.log(data);
	};

	return (
		<form className='flex flex-col gap-2' onSubmit={handleSubmit}>
			<Input name='email' type='email' label='Email' />
			<Input name='password' type='password' label='Password' />
			<Button type='submit'>Submit</Button>
		</form>
	);
};
