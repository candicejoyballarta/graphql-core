import styles from '../../styles/ImgCarousel.module.scss';

interface IImgCarousel {
	storeName: string;
	imgBackground: string;
	imgAlt: string;
}

const ImgCarousel = ({ storeName, imgBackground, imgAlt }: IImgCarousel) => {
	const opacities = [1, 0.9, 0.75, 0.6, 0.45, 0.3, 0.2, 0.1];

	return (
		<div className={`${styles.storeMain} ${styles.storeBanner}`}>
			<div className={styles.storeBg}>
				<div className={styles.imgWrapper}>
					<img src={imgBackground} alt={imgAlt} />
				</div>
			</div>
			<div className={styles.gradient}>
				{opacities.map((opacity, index) => (
					<div
						key={index}
						className={styles.gradientStripe}
						style={{
							opacity: opacity,
							backgroundColor: 'rgb(28, 28, 28)',
						}}
					></div>
				))}
			</div>
			<div className={styles.content}>
				<div className={styles.subtitle}>
					<h4 className={styles.h4}>
						STORES
						<br />
						{storeName}
					</h4>
				</div>
				<div className={styles.link}>
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
