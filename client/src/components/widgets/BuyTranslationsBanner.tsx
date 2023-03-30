import React, { useState, useEffect } from 'react';
import '../../styles/_buyTranslationsBanner.scss';
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
		<div className='buy-container'>
			<div className='content' style={width <= 600 ? {} : style}>
				<div className='title'>{txtHeader}</div>
				{makeItalic(txtDescription, 'subtitle')}
				<div className='form-group'>
					{id == 2 ? (
						<input
							type='text'
							className='square-control'
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
			<div className='buy-image'>
				<div className='img-wrapper'>
					<img src={imgBackground} alt='buy img2' />
				</div>
			</div>
		</div>
	);
};

export default BuyTranslationsBanner;
