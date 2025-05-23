import cn from 'classnames';
import { forwardRef, type JSX, type ReactNode } from 'react';

type Variant = 'default' | 'filled' | 'unstyled';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Radius = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	description?: string;
	icon?: JSX.Element;
	error?: ReactNode;
	variant?: Variant;
	inputSize?: Size;
	radius?: Radius;
	withAsterisk?: boolean;
	className?: string;
	name: string;
}

type VariantMapper = Record<Variant, string>;
type SizeMapper = Record<Size, string>;
type RadiusMapper = Record<Radius, string>;
type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, Props>((props, ref) => {
	const {
		label = '',
		description = '',
		icon,
		error = '',
		variant = 'default',
		inputSize = 'md',
		radius = 'md',
		withAsterisk = false,
		className = '',
		name,
		...rest
	} = props;

	const variantMapper: VariantMapper = {
		default: 'bg-white border-gray-300',
		filled: 'bg-gray-200 border-transparent',
		unstyled: 'bg-transparent border-none outline-none p-0 !pr-0',
	};
	const sizeMapper: SizeMapper = {
		xs: 'px-2.5',
		sm: 'px-3',
		md: 'px-3.5',
		lg: 'px-4',
		xl: 'px-5',
	};
	const labelSizeMapper: SizeMapper = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
	};
	const textSizeMapper: SizeMapper = {
		xs: 'text-tiny',
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
		xl: 'text-lg',
	};
	const radiusMapper: RadiusMapper = {
		xs: 'rounded-xs',
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-2xl',
		xl: 'rounded-4xl',
	};

	return (
		<div className='flex flex-col items-start text-black'>
			<label htmlFor={rest?.id || name} className={cn(labelSizeMapper[inputSize])}>
				{label} {label && (withAsterisk || rest.required) && <span className='text-red-500'>*</span>}
			</label>

			<p className={cn('opacity-50', textSizeMapper[inputSize])}>{description}</p>

			<div className='relative flex items-center w-full'>
				<div className='text-inherit absolute inset-y-auto left-2 z-10 pointer-events-none'>{icon}</div>
				<input
					ref={ref}
					id={rest?.id || name}
					type='text'
					required={withAsterisk}
					{...rest}
					className={cn(
						'min-w-10 placeholder:text-gray-500 border',
						'leading-relaxed',
						'outline-blue-500 focus:outline -outline-offset-2',
						{ 'text-red-500 border-red-500 outline-red-500 placeholder:text-red-500': error },
						{ 'pl-8 pr-2': icon },
						variantMapper[variant],
						sizeMapper[inputSize],
						radiusMapper[radius],
						labelSizeMapper[inputSize],
						className
					)}
				/>
			</div>

			<div className={cn('text-red-500', textSizeMapper[inputSize])}>{error}</div>
		</div>
	);
});

Input.displayName = 'TextInput';
