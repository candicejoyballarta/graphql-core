import { useQuery } from '@apollo/client';
import VidBannerLight from './widgets/VidBannerLight';
import VidBannerDark from './widgets/VidBannerDark';
import { GET_VIDBANNERS } from '../queries/rootQueries';
import { IButton } from '../model/IButton';

const VidBanner = () => {
	const { loading, error, data } = useQuery(GET_VIDBANNERS);

	if (error) {
		return <h1>error</h1>;
	}

	return (
		<>
			{!loading && !error && (
				<div className='one-column-layout-row main-placement-6'>
					<div className='two-col'>
						{data.vidBanners.map(
							(
								banner: {
									txtHeader: string;
									vidBackground: string;
									buttons: IButton;
									style: string;
								},
								index: number
							) => (
								<div key={index}>
									{banner.style == 'light' ? (
										<VidBannerLight
											txtHeader={banner.txtHeader}
											vidBackground={banner.vidBackground}
											buttons={banner.buttons}
										/>
									) : (
										<VidBannerDark
											txtHeader={banner.txtHeader}
											vidBackground={banner.vidBackground}
											buttons={banner.buttons}
										/>
									)}
								</div>
							)
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default VidBanner;
