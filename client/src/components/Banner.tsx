import React from 'react';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import logo from '../assets/certified.webp';
import '../styles/_banner.scss';

const Banner = () => {
	return (
		<>
			<div className='container'>
				<div className='background-img'>
					<div className='rel-image'>
						<img src={img1} alt='main header' />
					</div>
				</div>
				<div className='banner-content'>
					<h1>WHERE TO BUY TRANSITIONS®</h1>
					<h2>
						Locate an eye care professional near you or online and
						ask about Transitions® Light Intelligent Lenses™.
					</h2>
					<div className='buttons'>
						<button>BUY IN STORE</button>
						<button>BUY ONLINE</button>
					</div>
				</div>
			</div>
			<div className='buy-container'>
				<div className='content'>
					<div className='title'>BUY TRANSITIONS IN STORE</div>
					<div className='subtitle'>
						Looking for the best place to buy glasses with
						Transitions lenses? Search for your nearest eye doctor
						to book an appointment.
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='square-control'
							name='store'
							id='store'
							placeholder='Find a store nearby'
						/>
						<button>FIND</button>
					</div>
				</div>
				<div className='buy-image'>
					<div className='img-wrapper'>
						<img src={img2} alt='buy img2' />
					</div>
				</div>
			</div>
			<div className='buy-container'>
				<div className='content alter'>
					<div className='title'>BUY TRANSITIONS ONLINE</div>
					<div className='subtitle'>
						Looking for the best place to buy glasses with
						Transitions lenses online? Find our certified sellers
						here.
					</div>
					<div className='form-group'>
						<button>BUY ONLINE</button>
					</div>
				</div>
				<div className='buy-image'>
					<div className='img-wrapper'>
						<img src={img3} alt='buy img3' />
					</div>
				</div>
			</div>

			<div className='certify'>
				<div className='content'>
					<div className='background'>
						<div className='rel-image'>
							<div className='img-wrapper'>
								<img src={img4} alt='glasses' />
							</div>
						</div>
					</div>

					<div className='text-content'>
						<div className='logo'>
							<div className='logo-rel'>
								<div className='img'>
									<img src={logo} alt='logo' />
								</div>
							</div>
						</div>
						<div className='subtitle'>
							TRAINED SPECIALISTS READY TO ADVISE YOU
						</div>
						<div className='long-text'>
							Transitions Certified Providers are trained and
							equipped to recommend the perfect Transitions lenses
							to all their patients.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
