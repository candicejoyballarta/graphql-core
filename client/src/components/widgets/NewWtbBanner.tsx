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
					<h2>{props.txtDescription}</h2>
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
