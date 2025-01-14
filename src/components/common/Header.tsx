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

interface HeaderProps {
	onToggleTheme: () => void;
}

export function Header({ onToggleTheme }: HeaderProps) {
	return (
		<HeaderContainer>
			<TitleContainer>
				<Title>Top Interview 150</Title>
				<Subtitle>Complete the study plan to win the badge!</Subtitle>
			</TitleContainer>
			<ThemeToggle onClick={onToggleTheme}>Toggle Theme</ThemeToggle>
		</HeaderContainer>
	);
}
