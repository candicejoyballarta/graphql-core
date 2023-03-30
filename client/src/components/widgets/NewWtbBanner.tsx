import React from 'react';
import styles from '../../styles/NewWtbHeader.module.scss';
import { IBanner } from '../../model/IBanner';

const NewWtbBanner = ({
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
			<div className={styles.container}>
				<div className={styles.backgroundImg}>
					<div className={styles.relImgage}>
						<div className='img-wrapper'>
							<img src={imgBackground} alt='main header' />
						</div>
					</div>
				</div>
				<div className={styles.bannerContent}>
					<h1>{txtHeader}</h1>
					{makeItalic(txtDescription)}
					<div className={styles.buttons}>
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
