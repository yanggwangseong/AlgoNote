import styled from '@emotion/styled';

import { ProblemList } from './ProblemList';
import { Category } from '@/types/problem';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem 0;
`;

interface CategoriesContainerProps {
	categories: Category[];
	onToggleComplete: (id: number) => void;
}

export function CategoriesContainer({
	categories,
	onToggleComplete,
}: CategoriesContainerProps) {
	return (
		<Container>
			{categories.map((category) => (
				<ProblemList
					key={category.name}
					category={category}
					onToggleComplete={onToggleComplete}
				/>
			))}
		</Container>
	);
}
