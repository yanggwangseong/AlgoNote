import styled from '@emotion/styled';

import { Difficulty, Platform, Problem } from '@/types/problem';

const Item = styled.div<{ completed: boolean }>`
	display: flex;
	align-items: center;
	padding: 16px;
	border-bottom: 1px solid ${(props) => props.theme.border};
	opacity: ${({ completed }) => (completed ? 0.7 : 1)};
	background-color: ${({ completed, theme }) =>
		completed ? theme.background : 'transparent'};

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background-color: ${({ theme }) => theme.hover};
	}
`;

const Checkbox = styled.input`
	margin-right: 12px;
`;

const Title = styled.a<{ completed: boolean }>`
	flex: 1;
	color: ${(props) => props.theme.text};
	text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};

	&:hover {
		text-decoration: ${({ completed }) =>
			completed ? 'line-through' : 'underline'};
	}
`;

const BadgeContainer = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

const DifficultyBadge = styled.span<{ difficulty: Difficulty }>`
	padding: 4px 8px;
	border-radius: 4px;
	font-size: 12px;
	font-weight: 500;
	color: ${({ difficulty }) => {
		switch (difficulty) {
			case 'Easy':
				return '#00b8a3';
			case 'Medium':
				return '#ffa116';
			case 'Hard':
				return '#ff375f';
			default:
				return '#333';
		}
	}};
`;

const PlatformBadge = styled.span<{ platform: Platform }>`
	padding: 4px 8px;
	border-radius: 4px;
	font-size: 12px;
	font-weight: 500;
	background-color: ${({ platform }) => {
		switch (platform) {
			case 'Baekjoon':
				return '#0076C0';
			case 'Programmers':
				return '#44CEB0';
			case 'LeetCode':
				return '#FFA116';
			default:
				return '#333';
		}
	}};
	color: white;
`;

interface ProblemItemProps {
	problem: Problem;
	categoryName: string;
	onToggleComplete: (id: number, name: string) => void;
}

export function ProblemItem({
	problem,
	categoryName,
	onToggleComplete,
}: ProblemItemProps) {
	return (
		<Item completed={problem.completed}>
			<Checkbox
				type="checkbox"
				checked={problem.completed}
				onChange={() => onToggleComplete(problem.id, categoryName)}
			/>
			<Title
				href={problem.link}
				target="_blank"
				rel="noopener noreferrer"
				completed={problem.completed}
			>
				{problem.id}. {problem.title}
			</Title>
			<BadgeContainer>
				<PlatformBadge platform={problem.platform}>
					{problem.platform}
				</PlatformBadge>
				<DifficultyBadge difficulty={problem.difficulty}>
					{problem.difficulty}
				</DifficultyBadge>
			</BadgeContainer>
		</Item>
	);
}
