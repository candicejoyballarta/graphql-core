import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Banner from './Banner';

const GET_BANNERS = gql`
	query getBanners {
		banners {
			id
			txtHeader
			txtDescription
			imgBackground
			buttons {
				btnText
			}
		}
	}
`;

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
						txtHeader: string;
						txtDescription: string;
						imgBackground: string;
						buttons: { id: number; btnText: string }[];
					}) => (
						<Banner
							key={banner.id}
							id={banner.id}
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
