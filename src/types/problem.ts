export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Platform = 'Baekjoon' | 'Programmers' | 'LeetCode';

export interface Problem {
	id: number;
	title: string;
	difficulty: Difficulty;
	completed: boolean;
	link?: string;
	platform: Platform;
}

export interface Category {
	name: string;
	problems: Problem[];
}
