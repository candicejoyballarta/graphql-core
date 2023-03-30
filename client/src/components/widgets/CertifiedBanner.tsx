import React from 'react';
import logo from '../../assets/certified.webp';
import styles from '../../styles/CertifiedBanner.module.scss';
import makeItalic from '../../utils/makeItalic';
import { IBanner } from '../../model/IBanner';

const CertifiedBanner = ({
	txtHeader,
	txtDescription,
	imgBackground,
}: IBanner) => {
	return (
		<div className='one-column-layout__row one-column-layout__row--main_placement_5'>
			<div className={styles.content}>
				<div className={styles.background}>
					<div className={styles.relImage}>
						<div className={styles.imgWrapper}>
							<img src={imgBackground} alt='glasses' />
						</div>
					</div>
				</div>

				<div className={styles.textContent}>
					<div
						className='logo'
						style={{
							transition: 'all 0.8s ease 0s',
							opacity: 1,
							transform: 'translateY(0px)',
						}}
					>
						<div className={styles.logoRel}>
							<img src={logo} alt='logo' />
						</div>
					</div>
					<div className={styles.subtitle}>{txtHeader}</div>
					{makeItalic(txtDescription, styles.longText)}
				</div>
			</div>
		</div>
	);
};

export default CertifiedBanner;
