import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { CategoriesContainer } from './components/CategoriesContainer';
import { Header } from './components/common/Header';
import { Layout } from './components/common/Layout';

import { categories1, categories2, categories3 } from './problems';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

const AppContainer = styled.div`
	min-height: 100vh;
	background-color: ${(props) => props.theme.background};
`;

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [selectedProblemSet, setSelectedProblemSet] = useState<number>(1);

	const handleToggleComplete = (id: number) => {
		console.log('Toggle complete:', id);
	};

	const getProblemSet = (setNumber: number) => {
		switch (setNumber) {
			case 1:
				return categories1;
			case 2:
				return categories2;
			case 3:
				return categories3;
			default:
				return categories1;
		}
	};

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyle />
			<AppContainer>
				<BrowserRouter>
					<Layout>
						<Header
							onToggleTheme={() => setIsDarkMode(!isDarkMode)}
							selectedProblemSet={selectedProblemSet}
							onProblemSetChange={(value: number) =>
								setSelectedProblemSet(value)
							}
						/>
						<Routes>
							<Route
								path="/"
								element={
									<CategoriesContainer
										categories={getProblemSet(selectedProblemSet)}
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
