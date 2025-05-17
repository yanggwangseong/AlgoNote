import styled from '@emotion/styled';

import { ProblemItem } from './ProblemItem';
import { Category } from '@/types/problem';

const Container = styled.div`
	background: ${(props) => props.theme.problemBackground};
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

interface ProblemListProps {
	category: Category;
	onToggleComplete: (id: number, name: string) => void;
}

export function ProblemList({ category, onToggleComplete }: ProblemListProps) {
	return (
		<Container>
			{category.problems.map((problem) => (
				<ProblemItem
					key={`${category.name}_${problem.id}`}
					problem={problem}
					categoryName={category.name}
					onToggleComplete={() => onToggleComplete(problem.id, category.name)}
				/>
			))}
		</Container>
	);
}
