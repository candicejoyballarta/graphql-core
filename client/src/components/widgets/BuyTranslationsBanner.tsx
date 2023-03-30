import React, { useState, useEffect } from 'react';
import styles from '../../styles/BTBanner.module.scss';
import makeItalic from '../../utils/makeItalic';
import { IBanner } from '../../model/IBanner';
interface BTBanner extends IBanner {
	style: React.CSSProperties;
}

const BuyTranslationsBanner = ({
	id,
	txtHeader,
	txtDescription,
	buttons,
	imgBackground,
	style,
}: BTBanner) => {
	const [storeName, setStoreName] = useState('');
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		let x = (event: Event) => setWidth(window.innerWidth);
		window.addEventListener('resize', x);

		return () => {
			window.removeEventListener('resize', x);
		};
	}, []);

	return (
		<div className={styles.buyContainer}>
			<div className={styles.content} style={width <= 600 ? {} : style}>
				<div className={styles.title}>{txtHeader}</div>
				{makeItalic(txtDescription, styles.subtitle)}
				<div className={styles.formGroup}>
					{id == 2 ? (
						<input
							type='text'
							className={styles.squareControl}
							name='store'
							value={storeName}
							onChange={(e) => setStoreName(e.target.value)}
							id='store'
							placeholder='Find a store nearby'
						/>
					) : (
						''
					)}
					{buttons?.map((btn, index) => {
						return (
							<button
								key={index}
								className='square-button square-button-primary'
								disabled={id == 3 ? false : !storeName}
							>
								{btn.btnText}
							</button>
						);
					})}
				</div>
			</div>
			<div className={styles.buyImage}>
				<div className={styles.imgWrapper}>
					<img src={imgBackground} alt='buy img2' />
				</div>
			</div>
		</div>
	);
};

export default BuyTranslationsBanner;
