import React from 'react';
import '../../styles/_newWtbBanner.scss';

type Buttons = {
	id: number;
	btnText: string;
};

type Props = {
	id: number;
	txtHeader: string;
	txtDescription: string;
	imgBackground: string;
	buttons: Buttons[];
};

const NewWtbBanner = (props: Props) => {
	// Alternative implementation of makeItalics util
	function makeItalic(text: string) {
		let description = text.split(' ');
		return (
			<h2>
				{description.map((word: string, index: number) => {
					// Checks multiple matches of words
					let words = [
						'Transitions®',
						'Light',
						'Intelligent',
						'Lenses™',
					];
					// If the word matches, then italicize
					let italize = words.some((w) => {
						return word === w;
					});
					if (italize) {
						return <i key={index}> {word}</i>;
					} else {
						return <React.Fragment> {word}</React.Fragment>;
					}
				})}
			</h2>
		);
	}

	return (
		<div className='one-column-layout-row main-placement-1'>
			<div className='container'>
				<div className='background-img'>
					<div className='rel-image'>
						<div className='img-wrapper'>
							<img src={props.imgBackground} alt='main header' />
						</div>
					</div>
				</div>
				<div className='banner-content'>
					<h1>{props.txtHeader}</h1>
					{makeItalic(props.txtDescription)}
					<div className='buttons'>
						{props.buttons?.map((btn, index) => {
							return (
								<button
									className='square-button square-button-primary'
									key={index}
								>
									{btn.btnText}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewWtbBanner;
