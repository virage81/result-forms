import type { FormEvent } from 'react';
import { FaUser } from 'react-icons/fa';
import { Button, Input } from './ui';

export const SignUp = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		console.log(data);
	};

	return (
		<form className='flex flex-col items-stretch gap-2' onSubmit={handleSubmit}>
			<Input name='firstname' label='Имя' required />
			<Input name='nickname' label='Ник' icon={<FaUser />} required />
			<Input name='email' type='email' label='Почта' required />

			<Input id='male' name='gender' type='radio' value='male' label='Мужской' required />
			<Input id='female' name='gender' type='radio' value='female' label='Женский' required />

			<Input name='password' type='password' label='Password' required />
			<Input name='password-repeat' type='password' label='Repeat Password' required />
			<Button type='submit'>Submit</Button>
		</form>
	);
};
