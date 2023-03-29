import NewWtbBanner from './widgets/NewWtbBanner';
import BuyTranslationsBanner from './widgets/BuyTranslationsBanner';
import CertifiedBanner from './widgets/CertifiedBanner';

type Buttons = {
	id: number;
	btnText: string;
};

type Props = {
	id: number;
	imgHeader: string;
	txtHeader: string;
	txtDescription: string;
	imgBackground: string;
	buttons: Buttons[];
};

const Banner = (props: Props) => {
	if (props.id == 1) {
		return (
			<>
				<NewWtbBanner
					id={props.id}
					txtHeader={props.txtHeader}
					txtDescription={props.txtDescription}
					imgBackground={props.imgBackground}
					buttons={props.buttons}
				/>
			</>
		);
	}

	if (props.id == 2) {
		return (
			<div className='one-column-layout-row main-placement-2'>
				<BuyTranslationsBanner
					id={props.id}
					txtHeader={props.txtHeader}
					txtDescription={props.txtDescription}
					imgBackground={props.imgBackground}
					buttons={props.buttons}
					style={{}}
				/>
			</div>
		);
	}

	if (props.id == 3) {
		return (
			<div className='one-column-layout-row main-placement-3'>
				<BuyTranslationsBanner
					id={props.id}
					txtHeader={props.txtHeader}
					txtDescription={props.txtDescription}
					imgBackground={props.imgBackground}
					buttons={props.buttons}
					style={{ order: '1', marginLeft: '95px' }}
				/>
			</div>
		);
	}

	if (props.id == 4) {
		return (
			<CertifiedBanner
				id={props.id}
				imgHeader={props.imgHeader}
				txtHeader={props.txtHeader}
				txtDescription={props.txtDescription}
				imgBackground={props.imgBackground}
			/>
		);
	}

	return <></>;
};

export default Banner;
