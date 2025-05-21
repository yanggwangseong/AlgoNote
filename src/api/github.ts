import { Category } from '@/types/problem';

interface GitHubIssue {
	number: number;
	title: string;
	labels: Array<{
		name: string;
	}>;
	html_url: string;
	body?: string;
}

export async function fetchProblemsFromGitHub(): Promise<Category[]> {
	const token = import.meta.env.VITE_GITHUB_TOKEN;
	const owner = import.meta.env.VITE_GITHUB_REPO_OWNER;
	const repo = import.meta.env.VITE_GITHUB_REPO_NAME;

	const response = await fetch(
		`https://api.github.com/repos/${owner}/${repo}/issues?labels=tony9402&state=open`,
		{
			headers: {
				Authorization: `token ${token}`,
				Accept: 'application/vnd.github.v3+json',
			},
		},
	);

	if (!response.ok) {
		throw new Error('Failed to fetch issues from GitHub');
	}

	const issues: GitHubIssue[] = await response.json();

	/**
	 * TODO: 난이도 추출
	 * TODO: 문제 플랫폼 추출
	 */
	return [
		{
			name: 'Tony Problems',
			problems: issues.map((issue) => {
				let link = issue.html_url;
				if (issue.body) {
					// [URL] 마크다운 링크가 있는경우 문제 링크 추출
					const match = issue.body.match(/\[URL\]\((.*?)\)/);
					if (match && match[1]) {
						link = match[1];
					}
				}
				return {
					id: issue.number,
					title: issue.title.replace(/\[.*?\]/, '').trim(),
					link,
					platform: 'Baekjoon',
					difficulty: 'Easy',
					completed: false,
				};
			}),
		},
	];
}
