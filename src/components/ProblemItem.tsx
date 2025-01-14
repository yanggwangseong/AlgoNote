import styled from '@emotion/styled';

import { Problem } from '@/types/problem';

const Item = styled.div`
	display: flex;
	align-items: center;
	padding: 16px;
	border-bottom: 1px solid ${(props) => props.theme.border};

	&:last-child {
		border-bottom: none;
	}
`;

const Checkbox = styled.input`
	margin-right: 12px;
`;

const Title = styled.a`
	flex: 1;
	color: ${(props) => props.theme.text};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const Badge = styled.span<{ difficulty: string }>`
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

interface ProblemItemProps {
	problem: Problem;
	onToggleComplete: (id: number) => void;
}

export function ProblemItem({ problem, onToggleComplete }: ProblemItemProps) {
	return (
		<Item>
			<Checkbox
				type="checkbox"
				checked={problem.completed}
				onChange={() => onToggleComplete(problem.id)}
			/>
			<Title href={problem.link} target="_blank" rel="noopener noreferrer">
				{problem.id}. {problem.title}
			</Title>
			<Badge difficulty={problem.difficulty}>{problem.difficulty}</Badge>
		</Item>
	);
}
