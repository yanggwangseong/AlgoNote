import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { CategoriesContainer } from './components/CategoriesContainer';
import { Header } from './components/common/Header';
import { Layout } from './components/common/Layout';

import { categories } from './problems/basic-problem';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

const AppContainer = styled.div`
	min-height: 100vh;
	background-color: ${(props) => props.theme.background};
`;

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleToggleComplete = (id: number) => {
		console.log('Toggle complete:', id);
	};

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyle />
			<AppContainer>
				<BrowserRouter>
					<Layout>
						<Header onToggleTheme={() => setIsDarkMode(!isDarkMode)} />
						<Routes>
							<Route
								path="/"
								element={
									<CategoriesContainer
										categories={categories}
										onToggleComplete={handleToggleComplete}
									/>
								}
							/>
						</Routes>
					</Layout>
				</BrowserRouter>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
