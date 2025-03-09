import { Fragment } from 'react';
import { Module } from './module';

export function SpecializedSubjects({ title, specializedSubjects }: Program) {
	return (
		<div className='mt-[1.625rem] lg:mt-[4.25rem] flex flex-col gap-[1.625rem] lg:gap-[3.25rem]'>
			<h2 className='text-[1.375rem] font-bold leading-[120%] text-black lg:text-[1.625rem]'>
				{title}
			</h2>
			<div className='flex flex-col gap-[.625rem] lg:flex-row lg:gap-[2.875rem]'>
				{specializedSubjects?.map((specializedSubject: Subject) => {
					const length = specializedSubject.skills.length;
					const firstModule = specializedSubject.skills.slice(
						0,
						Math.round(length / 2)
					);
					const secondModule = specializedSubject.skills.slice(
						Math.round(length / 2),
						length
					);

					return (
						<Fragment key={specializedSubject.id}>
							<Module items={firstModule} number={1} />
							<Module items={secondModule} number={2} />
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
