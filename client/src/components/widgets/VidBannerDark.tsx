import { IVidBanner } from '../../model/IVidBanner';
import styles from '../../styles/VidBanner.module.scss';

const VidBannerDark = ({ txtHeader, vidBackground, buttons }: IVidBanner) => {
	return (
		<div className={`${styles.banner} ${styles.bannerDark}`}>
			<div className={`${styles.bannerContainer} ${styles.leftMiddle}`}>
				<video
					autoPlay
					loop
					muted
					className={styles.bgVideo}
					preload='none'
					playsInline
				>
					<source src={vidBackground} type='video/mp4' />
					"Your browser does not support the video tag"
				</video>
				<h4 className={`${styles.bannerSubtitle} ${styles.h4}`}>
					{txtHeader}
				</h4>
				<div className={styles.bannerButton}>
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
						{buttons.btnText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default VidBannerDark;
