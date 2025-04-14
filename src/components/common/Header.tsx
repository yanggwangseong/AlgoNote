import styled from '@emotion/styled';

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 0;
	border-bottom: 1px solid ${(props) => props.theme.border};
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const Title = styled.h1`
	color: ${(props) => props.theme.text};
	font-size: 24px;
	font-weight: bold;
`;

const Subtitle = styled.p`
	font-size: 14px;
	color: ${(props) => props.theme.text};
	opacity: 0.7;
`;

const ThemeToggle = styled.button`
	padding: 8px 16px;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.border};
	background: transparent;
	cursor: pointer;
	color: ${(props) => props.theme.text};
`;

const Select = styled.select`
	padding: 8px 16px;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.border};
	background: transparent;
	color: ${(props) => props.theme.text};
	cursor: pointer;
	margin-right: 8px;

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.primary};
	}
`;

interface HeaderProps {
	onToggleTheme: () => void;
	selectedProblemSet: number;
	onProblemSetChange: (value: number) => void;
}

export function Header({
	onToggleTheme,
	selectedProblemSet,
	onProblemSetChange,
}: HeaderProps) {
	return (
		<HeaderContainer>
			<TitleContainer>
				<Title>알고리즘 문제 풀이</Title>
				<Subtitle>Algorithm Problem Solving</Subtitle>
			</TitleContainer>
			<div>
				<Select
					value={selectedProblemSet}
					onChange={(e) => onProblemSetChange(Number(e.target.value))}
				>
					<option value={1}>Basic</option>
					<option value={2}>50 Problem</option>
				</Select>
				<ThemeToggle onClick={onToggleTheme}>Theme Toggle</ThemeToggle>
			</div>
		</HeaderContainer>
	);
}
