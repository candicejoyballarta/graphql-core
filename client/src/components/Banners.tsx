import React from 'react';
import { useQuery } from '@apollo/client';
import Banner from './Banner';
import { GET_BANNERS } from '../queries/rootQueries';

const Banners = () => {
	const { loading, error, data } = useQuery(GET_BANNERS);

	if (loading) {
		return <h1>loading</h1>;
	}

	if (error) {
		<h1>Error</h1>;
	}

	return (
		<>
			{!loading &&
				!error &&
				data.banners.map(
					(banner: {
						id: number;
						imgHeader: string;
						txtHeader: string;
						txtDescription: string;
						imgBackground: string;
						buttons: { id: number; btnText: string }[];
					}) => (
						<Banner
							key={banner.id}
							id={banner.id}
							imgHeader={banner.imgHeader}
							txtHeader={banner.txtHeader}
							txtDescription={banner.txtDescription}
							imgBackground={banner.imgBackground}
							buttons={banner.buttons}
						/>
					)
				)}
		</>
	);
};

export default Banners;
