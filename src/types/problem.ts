export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Problem {
	id: number;
	title: string;
	difficulty: Difficulty;
	completed: boolean;
	link?: string;
}

export interface Category {
	name: string;
	problems: Problem[];
}
