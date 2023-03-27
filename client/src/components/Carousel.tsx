import React from 'react';
import { gql, useQuery } from '@apollo/client';
import ImgCarousel from './ImgCarousel';
import { GET_STORES } from '../queries/rootQueries';
import '../styles/_carousel.scss';

type Props = {};

const Carousel = (props: Props) => {
	const { loading, error, data } = useQuery(GET_STORES);

	if (loading) {
		return <h1>loading</h1>;
	}

	if (error) {
		<h1>Error</h1>;
	}

	return (
		<>
			{!loading && !error && (
				<div className='main-placement-4'>
					<div className='carousel-container'>
						<div className='title'>
							<h4>EXPLORE STORES NEAR YOU</h4>
						</div>

						<div className='wrapper store-carousel slide-init'>
							<div className='carousel-arrow arrow-left'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								>
									<circle cx='12' cy='12' r='10'></circle>
									<polyline points='12 8 8 12 12 16'></polyline>
									<line x1='16' y1='12' x2='8' y2='12'></line>
								</svg>
							</div>
							<div className='carousel'>
								<div className='carousel-track'>
									{data.stores.map(
										(
											store: {
												id: number;
												txtHeader: string;
												txtLink: string;
												imgBackground: string;
											},
											index: number
										) => (
											<ImgCarousel
												key={index}
												storeName={store.txtHeader}
												imgAlt={store.txtHeader}
												imgBackground={
													store.imgBackground
												}
											/>
										)
									)}
								</div>
							</div>
							<div className='carousel-arrow arrow-right'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								>
									<circle cx='12' cy='12' r='10'></circle>
									<polyline points='12 16 16 12 12 8'></polyline>
									<line x1='8' y1='12' x2='16' y2='12'></line>
								</svg>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Carousel;
