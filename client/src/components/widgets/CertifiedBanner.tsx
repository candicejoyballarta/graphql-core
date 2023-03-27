import React from 'react';
import '../../styles/_certifiedBanner.scss';

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
					<div className='logo'>
						<div className='logo-rel'>
							<div className='img'>
								<img src={props.imgHeader} alt='logo' />
							</div>
						</div>
					</div>
					<div className='subtitle'>{props.txtHeader}</div>
					<div className='long-text'>{props.txtDescription}</div>
				</div>
			</div>
		</div>
	);
};

export default CertifiedBanner;
