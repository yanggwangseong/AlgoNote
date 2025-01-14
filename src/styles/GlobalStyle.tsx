import { Global, css } from '@emotion/react';

import { reset } from '@/styles/reset';

const GlobalStyle = () => (
	<Global
		styles={css`
			${reset}
			* {
				font-family: sans-serif !important;
				box-sizing: border-box;
			}

			.container {
				max-width: 1200px;
				margin: 0 auto;
				padding: 0 1rem;
			}
		`}
	/>
);

export default GlobalStyle;
