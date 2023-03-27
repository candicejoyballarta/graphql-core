import React, { useState } from 'react';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import logo from '../assets/certified.webp';
import '../styles/_banner.scss';

type Buttons = {
	id: number;
	btnText: string;
};

type Props = {
	id: number;
	txtHeader: string;
	txtDescription: string;
	imgBackground: string;
	buttons: Buttons[];
};

const Banner = (props: Props) => {
	const [storeName, setStoreName] = useState('');

	if (props.id == 1) {
		return (
			<div className='main-placement-1'>
				<div className='container'>
					<div className='background-img'>
						<div className='rel-image'>
							<div className='img-wrapper'>
								<img
									src={props.imgBackground}
									alt='main header'
								/>
							</div>
						</div>
					</div>
					<div className='banner-content'>
						<h1>{props.txtHeader}</h1>
						<h2>{props.txtDescription}</h2>
						<div className='buttons'>
							{props.buttons?.map((btn, index) => {
								return (
									<button
										className='square-button square-button-primary'
										key={index}
									>
										{btn.btnText}
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (props.id == 2) {
		return (
			<div className='main-placement-2'>
				<div className='buy-container'>
					<div className='content'>
						<div className='title'>{props.txtHeader}</div>
						<div className='subtitle'>{props.txtDescription}</div>
						<div className='form-group'>
							<input
								type='text'
								className='square-control'
								name='store'
								value={storeName}
								onChange={(e) => setStoreName(e.target.value)}
								id='store'
								placeholder='Find a store nearby'
							/>
							{props.buttons?.map((btn, index) => {
								return (
									<button
										key={index}
										className='square-button square-button-primary'
										disabled={!storeName}
									>
										{btn.btnText}
									</button>
								);
							})}
						</div>
					</div>
					<div className='buy-image'>
						<div className='img-wrapper'>
							<img src={props.imgBackground} alt='buy img2' />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (props.id == 3) {
		return (
			<div className='main-placement-3'>
				<div className='buy-container'>
					<div className='content alter'>
						<div className='title'>{props.txtHeader}</div>
						<div className='subtitle'>{props.txtDescription}</div>
						<div className='form-group'>
							{props.buttons?.map((btn, index) => {
								return (
									<button
										key={index}
										className='square-button square-button-primary'
									>
										{btn.btnText}
									</button>
								);
							})}
						</div>
					</div>
					<div className='buy-image'>
						<div className='img-wrapper'>
							<img src={props.imgBackground} alt='buy img3' />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (props.id == 4) {
		return (
			<>
				<div className='main-placement-5'>
					<div className='content'>
						<div className='background'>
							<div className='rel-image'>
								<div className='img-wrapper'>
									<img
										src={props.imgBackground}
										alt='glasses'
									/>
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
								equipped to recommend the perfect Transitions
								lenses to all their patients.
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	return <></>;
};

export default Banner;
