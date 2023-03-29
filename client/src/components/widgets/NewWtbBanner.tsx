import React from 'react';
import '../../styles/_newWtbBanner.scss';
import { IBanner } from '../../model/IBanner';

const NewWtbBanner = ({
	id,
	txtHeader,
	txtDescription,
	imgBackground,
	buttons,
}: IBanner) => {
	// Alternative implementation of makeItalics util
	const makeItalic = (text: string) => {
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
						return (
							<React.Fragment key={index}> {word}</React.Fragment>
						);
					}
				})}
			</h2>
		);
	};

	return (
		<div className='one-column-layout-row main-placement-1'>
			<div className='container'>
				<div className='background-img'>
					<div className='rel-image'>
						<div className='img-wrapper'>
							<img src={imgBackground} alt='main header' />
						</div>
					</div>
				</div>
				<div className='banner-content'>
					<h1>{txtHeader}</h1>
					{makeItalic(txtDescription)}
					<div className='buttons'>
						{buttons?.map((btn, index) => {
							return (
								<button
									key={index}
									className='square-button square-button-primary'
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
