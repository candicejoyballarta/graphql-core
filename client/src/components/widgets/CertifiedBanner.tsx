import React from 'react';
import logo from '../../assets/certified.webp';
import '../../styles/_certifiedBanner.scss';
import makeItalic from '../../utils/makeItalic';

type Props = {
	id: number;
	imgHeader: string;
	txtHeader: string;
	txtDescription: string;
	imgBackground: string;
};

const CertifiedBanner = (props: Props) => {
	return (
		<div className='one-column-layout-row main-placement-5'>
			<div className='content'>
				<div className='background'>
					<div className='rel-image'>
						<div className='img-wrapper'>
							<img src={props.imgBackground} alt='glasses' />
						</div>
					</div>
				</div>

				<div className='text-content'>
					<div
						className='logo'
						style={{
							transition: 'all 0.8s ease 0s',
							opacity: 1,
							transform: 'translateY(0px)',
						}}
					>
						<div className='logo-rel'>
							<img src={logo} alt='logo' />
						</div>
					</div>
					<div className='subtitle'>{props.txtHeader}</div>
					{makeItalic(props.txtDescription, 'long-text')}
				</div>
			</div>
		</div>
	);
};

export default CertifiedBanner;
