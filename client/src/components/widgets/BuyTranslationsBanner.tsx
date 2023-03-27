import React, { useState } from 'react';
import '../../styles/_buyTranslationsBanner.scss';

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
	style: React.CSSProperties;
};

const BuyTranslationsBanner = (props: Props) => {
	const [storeName, setStoreName] = useState('');
	return (
		<div className='buy-container'>
			<div className='content' style={props.style}>
				<div className='title'>{props.txtHeader}</div>
				<div className='subtitle'>{props.txtDescription}</div>
				<div className='form-group'>
					{props.id == 2 ? (
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
					{props.buttons?.map((btn, index) => {
						return (
							<button
								key={index}
								className='square-button square-button-primary'
								disabled={props.id == 3 ? false : !storeName}
							>
								{btn.btnText}
							</button>
						);
					})}
				</div>
			</div>
			<div className='buy-image'>
				<div className='img-wrapper'>
					<img src={props.imgBackground} alt='buy img2' />
				</div>
			</div>
		</div>
	);
};

export default BuyTranslationsBanner;
