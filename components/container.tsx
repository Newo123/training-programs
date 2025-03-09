import cn from 'clsx';
import { HTMLAttributes } from 'react';

export function Container({
	children,
	className,
	...rest
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('max-w-[1288px] mx-auto px-[1rem] w-full', className)}
			{...rest}
		>
			{children}
		</div>
	);
}
