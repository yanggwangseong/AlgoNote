import styled from '@emotion/styled';

import { ProblemList } from './ProblemList';
import { Category } from '@/types/problem';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem 0;
`;

const CategoryTitle = styled.h2`
	font-size: 1.125rem;
	font-weight: 500;
	color: ${(props) => props.theme.text};
	margin-bottom: 1rem;
	padding: 0.5rem;
	background-color: ${(props) => props.theme.categoryBackground};
	border-radius: 0.5rem;
	border: 1px solid ${(props) => props.theme.border};
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
				<div key={category.name}>
					<CategoryTitle>{category.name}</CategoryTitle>
					<ProblemList
						category={category}
						onToggleComplete={onToggleComplete}
					/>
				</div>
			))}
		</Container>
	);
}
