import React from 'react';
import vid2 from '../../assets/vid6.mp4';

type Button = {
	id: number;
	btnText: string;
};

type Props = {
	txtHeader: string;
	vidBackground: string;
	buttons: Button;
};

const VidBannerDark = (props: Props) => {
	return (
		<div className='banner banner-dark'>
			<div className='banner-container left-middle'>
				<video
					autoPlay
					loop
					className='bg-video'
					preload='none'
					playsInline
				>
					<source src={props.vidBackground} type='video/mp4' />
					"Your browser does not support the video tag"
				</video>
				<h4 className='banner-subtitle'>{props.txtHeader}</h4>
				<div className='banner-button'>
					<button className='square-button square-button-primary'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<polygon points='23 7 16 12 23 17 23 7'></polygon>
							<rect
								x='1'
								y='5'
								width='15'
								height='14'
								rx='2'
								ry='2'
							></rect>
						</svg>
						{props.buttons.btnText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default VidBannerDark;
