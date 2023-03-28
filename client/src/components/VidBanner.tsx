import React from 'react';
import vid1 from '../assets/vid5.mp4';
import vid2 from '../assets/vid6.mp4';
import '../styles/_vidBanner.scss';

type Props = {};

const VidBanner = (props: Props) => {
	return (
		<div className='one-column-layout-row main-placement-6'>
			<div className='two-col'>
				<div className='banner banner-light'>
					<div className='banner-container left-middle'>
						<video
							autoPlay
							loop
							className='bg-video'
							preload='none'
							playsInline
						>
							<source src={vid1} type='video/mp4' />
							"Your browser does not support the video tag"
						</video>
						<h4 className='banner-subtitle'>
							CHECK YOUR LIGHT <br />
							SENSITIVITY
						</h4>
						<div className='banner-button'>
							<button className='square-button square-button-secondary square-button-invert-secondary'>
								GET STARTED
							</button>
						</div>
					</div>
				</div>
				<div className='banner banner-dark'>
					<div className='banner-container left-middle'>
						<video
							autoPlay
							loop
							className='bg-video'
							preload='none'
							playsInline
						>
							<source src={vid2} type='video/mp4' />
							"Your browser does not support the video tag"
						</video>
						<h4 className='banner-subtitle'>
							PAIR YOUR FAVORITE <br />
							FRAME WITH THE <br />
							PERFECT LENS.
						</h4>
						<div className='banner-button'>
							<button className='square-button square-button-primary'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='1'
									stroke-linecap='round'
									stroke-linejoin='round'
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
								TRY ON NOW
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VidBanner;
