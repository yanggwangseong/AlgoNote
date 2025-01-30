import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { CategoriesContainer } from './components/CategoriesContainer';
import { Header } from './components/common/Header';
import { Layout } from './components/common/Layout';

import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';
import { Category } from './types/problem';

const AppContainer = styled.div`
	min-height: 100vh;
	background-color: ${(props) => props.theme.background};
`;

const categories: Category[] = [
	{
		name: 'DFS / BFS',
		problems: [
			{
				id: 1,
				title: 'DFS와 BFS',
				difficulty: 'Easy',
				completed: false,
				link: 'https://www.acmicpc.net/problem/1260',
				platform: 'Baekjoon',
			},
			{
				id: 2,
				title: '바이러스',
				difficulty: 'Easy',
				completed: false,
				link: 'https://www.acmicpc.net/problem/2606',
				platform: 'Baekjoon',
			},
		],
	},
	{
		name: 'Two Pointers',
		problems: [
			{
				id: 125,
				title: 'Valid Palindrome',
				difficulty: 'Easy',
				completed: false,
				link: 'https://leetcode.com/problems/valid-palindrome',
				platform: 'LeetCode',
			},
			{
				id: 167,
				title: 'Two Sum II - Input Array Is Sorted',
				difficulty: 'Medium',
				completed: false,
				link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted',
				platform: 'LeetCode',
			},
		],
	},
	{
		name: 'Sliding Window',
		problems: [
			{
				id: 209,
				title: 'Minimum Size Subarray Sum',
				difficulty: 'Medium',
				completed: false,
				link: 'https://leetcode.com/problems/minimum-size-subarray-sum',
				platform: 'LeetCode',
			},
			{
				id: 3,
				title: 'Longest Substring Without Repeating Characters',
				difficulty: 'Medium',
				completed: false,
				link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters',
				platform: 'LeetCode',
			},
		],
	},
];

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
