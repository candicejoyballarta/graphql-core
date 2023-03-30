import { IVidBanner } from '../../model/IVidBanner';
import styles from '../../styles/VidBanner.module.scss';

const VidBannerLight = ({ txtHeader, vidBackground, buttons }: IVidBanner) => {
	return (
		<div className={`${styles.banner} ${styles.bannerLight}`}>
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
					<button className='square-button square-button-secondary square-button-invert-secondary'>
						{buttons.btnText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default VidBannerLight;
