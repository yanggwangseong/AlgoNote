import { Theme as ThemeType } from '@emotion/react';

declare module '@emotion/react' {
	export interface Theme extends ThemeType {
		primary: string;
		background: string;
		text: string;
		border: string;
		problemBackground: string;
		categoryBackground: string;
	}
}
