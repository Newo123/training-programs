interface Skill {
	id: number;
	title: string | null;
	string: string | null;
	new: boolean | null;
}

interface Subject {
	id: number;
	string: string | null;
	title: string | null;
	duration: number | null;
	new: boolean | null;
	skills: Skill[];
}

interface StudyField {
	id: number;
	name: string;
	description: string;
	copyToKk: boolean;
	slug: string;
	locale: string;
	published_at: string;
	created_at: string;
	updated_at: string;
}

interface Category {
	id: number;
	type: string;
	slug: string;
	copyToKk: boolean;
	description: string;
	locale: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	labelCases: {
		id: number;
		singular: string;
		plural: string;
	};
}

interface Duration {
	id: number;
	studyHours: number | null;
	minStudyMonths: number | null;
	practicalLessons: number;
	workshops: number;
	modulesDescription: string;
	modulesResult: string;
	videomaterials: number;
	modulesTools: any[]; // Уточните тип, если известна структура
}

interface WhoIsFor {
	id: number;
	name: string;
	description: string;
}

interface ActualInformation {
	id: number;
	paragraph: string | null;
	description: string;
	actualPhoto1: string | null;
	actualPhoto2: string | null;
}

interface FutureJob {
	id: number;
	futureJobSalary: string | null;
	job: {
		id: number;
		title: string;
		string: string;
	}[];
}

interface Picture {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: {
		[key: string]: {
			ext: string;
			url: string;
			hash: string;
			mime: string;
			name: string;
			path: string | null;
			size: number;
			width: number;
			height: number;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
		};
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: {
		public_id: string;
		resource_type: string;
	};
	created_at: string;
	updated_at: string;
}

interface Teacher {
	id: number;
	name: string;
	description: string;
	slug: string;
	copyToKk: boolean;
	locale: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	descriptionItems: {
		id: number;
		item: string;
	}[];
	portrait: Picture;
}

interface Program {
	id: number;
	title: string;
	slug: string;
	showInMenu: boolean | null;
	studyFormat: string;
	goal: string;
	description: string;
	price: number;
	discount: number;
	subjectsStickerType: string;
	copyToKk: boolean | null;
	study_field: StudyField;
	category: Category;
	icon: string | null;
	metaTitle: string;
	metaDescription: string;
	locale: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	isActive: boolean;
	program: string | null;
	new: boolean | null;
	hit: boolean;
	frdo: boolean | null;
	employment: boolean | null;
	MetaNoindex: boolean | null;
	MetaNofollow: boolean | null;
	whatWillYouLearn: Subject[];
	specializedSubjects: Subject[];
	duration: Duration;
	whoIsFor: WhoIsFor[];
	actualInformation: ActualInformation;
	futureJob: FutureJob;
	picture: Picture;
	teachers: Teacher[];
}
