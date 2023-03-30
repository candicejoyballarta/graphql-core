import NewWtbBanner from './widgets/NewWtbBanner';
import BuyTranslationsBanner from './widgets/BuyTranslationsBanner';
import CertifiedBanner from './widgets/CertifiedBanner';
import { IBanner } from '../model/IBanner';

const Banner = ({
	id,
	imgHeader,
	txtHeader,
	txtDescription,
	imgBackground,
	buttons,
}: IBanner) => {
	if (id == 1) {
		return (
			<>
				<NewWtbBanner
					id={id}
					imgHeader={''}
					txtHeader={txtHeader}
					txtDescription={txtDescription}
					imgBackground={imgBackground}
					buttons={buttons}
				/>
			</>
		);
	}

	if (id == 2) {
		return (
			<div className='one-column-layout__row one-column-layout__row--main_placement_2'>
				<BuyTranslationsBanner
					id={id}
					imgHeader={''}
					txtHeader={txtHeader}
					txtDescription={txtDescription}
					imgBackground={imgBackground}
					buttons={buttons}
					style={{}}
				/>
			</div>
		);
	}

	if (id == 3) {
		return (
			<div className='one-column-layout__row one-column-layout__row--main_placement_3'>
				<BuyTranslationsBanner
					id={id}
					imgHeader={''}
					txtHeader={txtHeader}
					txtDescription={txtDescription}
					imgBackground={imgBackground}
					buttons={buttons}
					style={{ order: '1', marginLeft: '95px' }}
				/>
			</div>
		);
	}

	if (id == 4) {
		return (
			<CertifiedBanner
				id={id}
				imgHeader={imgHeader}
				txtHeader={txtHeader}
				txtDescription={txtDescription}
				imgBackground={imgBackground}
				buttons={[]}
			/>
		);
	}

	return <></>;
};

export default Banner;
