import '../../styles/_store.scss';

interface IImgCarousel {
	storeName: string;
	imgBackground: string;
	imgAlt: string;
}

const ImgCarousel = ({ storeName, imgBackground, imgAlt }: IImgCarousel) => {
	const opacities = [1, 0.9, 0.75, 0.6, 0.45, 0.3, 0.2, 0.1];

	return (
		<div className='store-main store-banner'>
			<div className='store-bg'>
				<div className='img-wrapper'>
					<img src={imgBackground} alt={imgAlt} />
				</div>
			</div>
			<div className='gradient'>
				{opacities.map((opacity, index) => (
					<div
						key={index}
						className='gradient-stripe'
						style={{
							opacity: opacity,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
				))}
			</div>
			<div className='content'>
				<div className='subtitle'>
					<h4>
						STORES
						<br />
						{storeName}
					</h4>
				</div>
				<div className='link' style={{ alignItems: 'center' }}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='14'
						height='14'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='arrow-small'
					>
						<polyline points='9 18 15 12 9 6'></polyline>
					</svg>
					View stores
				</div>
			</div>
		</div>
	);
};

export default ImgCarousel;
