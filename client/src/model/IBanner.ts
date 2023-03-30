import { IButton } from './IButton';

export interface IBanner {
	id: number;
	imgHeader: Partial<string>;
	txtHeader: string;
	txtDescription: string;
	imgBackground: string;
	buttons: IButton[];
}
