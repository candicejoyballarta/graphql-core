import { IVidBanner } from '../../model/IVidBanner';

const VidBannerLight = ({ txtHeader, vidBackground, buttons }: IVidBanner) => {
	return (
		<div className='banner banner-light'>
			<div className='banner-container left-middle'>
				<video
					autoPlay
					loop
					muted
					className='bg-video'
					preload='none'
					playsInline
				>
					<source src={vidBackground} type='video/mp4' />
					"Your browser does not support the video tag"
				</video>
				<h4 className='banner-subtitle'>{txtHeader}</h4>
				<div className='banner-button'>
					<button className='square-button square-button-secondary square-button-invert-secondary'>
						{buttons.btnText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default VidBannerLight;
