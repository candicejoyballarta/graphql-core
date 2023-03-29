type Button = {
	id: number;
	btnText: string;
};

type Props = {
	txtHeader: string;
	vidBackground: string;
	buttons: Button;
};

const VidBannerLight = (props: Props) => {
	return (
		<div className='banner banner-light'>
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
					<button className='square-button square-button-secondary square-button-invert-secondary'>
						{props.buttons.btnText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default VidBannerLight;
