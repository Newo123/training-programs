'use client';

import cn from 'clsx';
import { useState } from 'react';

export function Module({ items, number }: { items: Skill[]; number: number }) {
	const [open, setOpen] = useState<boolean>(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div className='lg:basis-[48%] flex flex-col lg:flex-row lg:gap-[3.5rem] xl:gap-[5rem]'>
			<h4
				className={cn(
					'flex items-center gap-[1.5rem] text-[1.125rem] font-light leading-[130%] transition-all duration-300 text-[#262626] py-[.875rem] px-[1.5rem] bg-[#F7F7F7] lg:items-start lg:bg-transparent lg:p-0 lg:text-[2rem] lg:text-black lg:font-normal shrink-0 lg:pt-[1.875rem] relative before:hidden lg:before:block before:content-[""] before:absolute before:h-[.125rem] before:w-full before:top-0 before:left-0 before:bg-[#FF3535]',
					open && 'bg-[#FF3535] text-white'
				)}
				onClick={handleClick}
			>
				<div
					className={cn(
						'w-[1.125rem] h-[1.125rem] relative before:content-[""] before:transition-all before:duration-300 after:transition-all after:duration-300 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:w-full before:h-[.125rem] before:bg-[#D9D9D9] after:rotate-90 after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:w-full after:h-[.125rem] after:bg-[#D9D9D9] lg:hidden',
						open && 'after:max-w-0 before:bg-white'
					)}
				></div>
				{number} модуль
			</h4>
			<ul
				className={cn(
					'max-h-0 opacity-0 select-none pointer-events-none transition-all duration-500 flex flex-col gap-[.625rem] lg:pt-[2.25rem] lg:max-h-full lg:opacity-100 lg:select-auto lg:pointer-events-auto',
					open &&
						'max-h-[1000px] opacity-100 select-auto pointer-events-auto mt-[1.125rem] lg:mt-0'
				)}
			>
				{items.map((item: Skill) => (
					<li
						key={item.id}
						className='pl-[1.25rem] relative before:content-[""] before:absolute before:left-0 before:top-[.5rem] before:w-[.375rem] before:h-[.375rem] before:rounded-full before:bg-[#FF3535]'
					>
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
}
