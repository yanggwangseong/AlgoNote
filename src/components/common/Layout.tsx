import styled from '@emotion/styled';

const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
`;

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return <Container>{children}</Container>;
}
