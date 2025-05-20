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
	const [completedProblems, setCompletedProblems] = useState<Set<string>>(
		() => {
			// localStorage에서 완료된 문제 목록을 불러옵니다
			const saved = localStorage.getItem('completedProblems');
			return saved ? new Set(JSON.parse(saved)) : new Set();
		},
	);

	const handleToggleComplete = (id: number, name: string) => {
		const problemKey = `${name}_${id}`;
		setCompletedProblems((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(problemKey)) {
				newSet.delete(problemKey);
			} else {
				newSet.add(problemKey);
			}
			// localStorage에 저장
			localStorage.setItem('completedProblems', JSON.stringify([...newSet]));
			return newSet;
		});
	};

	const getProblemSet = (setNumber: number) => {
		const problems = (() => {
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
		})();

		// 각 문제의 completed 상태를 업데이트
		return problems.map((category) => ({
			...category,
			problems: category.problems.map((problem) => ({
				...problem,
				completed: completedProblems.has(`${category.name}_${problem.id}`),
			})),
		}));
	};

	const handleReset = () => {
		setCompletedProblems(new Set());
		localStorage.removeItem('completedProblems');
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
							onReset={handleReset}
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
