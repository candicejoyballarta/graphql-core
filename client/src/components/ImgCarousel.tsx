import React from 'react';
import '../styles/_store.scss';

type Props = {
	storeName: string;
	imgBackground: string;
	imgAlt: string;
};

const ImgCarousel = (props: Props) => {
	return (
		<div className='slide'>
			<div className='store-main store-banner'>
				<div className='store-bg'>
					<div className='img-wrapper'>
						<img src={props.imgBackground} alt={props.imgAlt} />
					</div>
				</div>
				<div className='gradient'>
					<div
						className='gradient-stripe'
						style={{
							opacity: 1,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
					<div
						className='gradient-stripe'
						style={{
							opacity: 0.9,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
					<div
						className='gradient-stripe'
						style={{
							opacity: 0.75,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
					<div
						className='gradient-stripe'
						style={{
							opacity: 0.6,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
					<div
						className='gradient-stripe'
						style={{
							opacity: 0.45,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
					<div
						className='gradient-stripe'
						style={{
							opacity: 0.3,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
					<div
						className='gradient-stripe'
						style={{
							opacity: 0.2,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
					<div
						className='gradient-stripe'
						style={{
							opacity: 0.1,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
				</div>
				<div className='content'>
					<div className='subtitle'>
						<h4>
							STORES
							<br />
							{props.storeName}
						</h4>
					</div>
					<div className='link'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='14'
							height='14'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='arrow-small'
						>
							<polyline points='9 18 15 12 9 6'></polyline>
						</svg>
						View stores
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImgCarousel;
