import { Container } from '@/components/container';
import { SpecializedSubjects } from '@/components/specializedSubjects';

const getData = async (): Promise<Program[]> =>
	fetch('https://api.moscow.mba/products')
		.then(result => result.json())
		.catch(err => {
			console.log(err);
		});
export const revalidate = 3600;
export default async function Page() {
	const response = await getData();
	let content = [];

	for (let i = 0; i < response.length; i++) {
		for (let j = 0; j < response[i].specializedSubjects.length; j++) {
			if (response[i].specializedSubjects[j].skills.length > 0) {
				content.push(response[i]);
			}
		}
	}
	content = content.slice(0, 5);

	return (
		<main className='flex flex-col min-h-screen py-[1.875rem] lg:py-[5rem]'>
			<Container className='flex flex-col'>
				<h1 className='text-[1.75rem] font-medium lg:text-[2.25rem] lg:font-bold leading-[120%] lg:mx-auto mb-[0.5rem] lg:mb-[1.375rem]'>
					Специализированные дисциплины
				</h1>
				{content.map((item: Program) => (
					<SpecializedSubjects key={item.id} {...item} />
				))}
				<div className='flex flex-col gap-[1.5rem] mt-[2.75rem] lg:grid lg:grid-cols-2 lg:gap-[1.875rem] lg:mt-[8.125rem]'>
					<div className='flex flex-col gap-[1.875rem] bg-[#FF3535] py-[2.5rem] px-[1.25rem] relative lg:px-[4.625rem] lg:py-[3.5rem] lg:gap-[1.5rem] before:content-[""] before:absolute before:top-0 before:right-0 before:w-[1.625rem] before:h-[1.625rem] lg:before:w-[2.75rem] lg:before:h-[2.75rem] before:bg-[linear-gradient(to_top_right,#CD1800_50%,white_50%)]'>
						<h6 className='font-bold leading-[120%] text-[1.625rem] text-white lg:text-[2.25rem]'>
							Практические модули
						</h6>
						<p className='text-[1.25rem] font-light leading-[130%] text-white'>
							Работа над собственными проектами: практика групповых
							взаимодействий, кейс-методы, эссе
						</p>
					</div>
					<div className='flex flex-col gap-[1.875rem] bg-[#2D2C2A] py-[2.5rem] px-[1.25rem] relative lg:px-[4.625rem] lg:py-[3.5rem] lg:gap-[1.5rem]'>
						<h6 className='font-bold leading-[120%] text-[1.625rem] text-white lg:text-[2.25rem]'>
							Практические модули
						</h6>
						<ul className='text-white flex flex-col gap-[1rem]'>
							<li className='pl-[1.25rem] text-[1.25rem] font-light relative before:content-[""] before:absolute before:left-0 before:top-[.5rem] before:w-[.375rem] before:h-[.375rem] before:rounded-full before:bg-[#FF3535]'>
								Бизнес-проектирование (подготовка итоговой аттестационной
								работы, консультирование по бизнес-проектированию)
							</li>
							<li className='pl-[1.25rem] text-[1.25rem] font-light relative before:content-[""] before:absolute before:left-0 before:top-[.5rem] before:w-[.375rem] before:h-[.375rem] before:rounded-full before:bg-[#FF3535]'>
								Защита итоговой аттестационной работы
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</main>
	);
}
