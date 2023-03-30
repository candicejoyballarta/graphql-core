import React, { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import ImgCarousel from './widgets/ImgCarousel';
import { GET_STORES } from '../queries/rootQueries';
import styles from '../styles/Carousel.module.scss';
import Slider from 'react-slick';

interface IArrowProps {
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const { loading, error, data } = useQuery(GET_STORES);

	const slider = useRef<Slider>(null);

	const next = () => {
		slider.current!.slickNext();
	};
	const previous = () => {
		slider.current!.slickPrev();
	};

	if (error) {
		<h1>Error</h1>;
	}

	console.log(currentIndex);

	const PrevArrow = ({ onClick }: IArrowProps) => (
		<div
			className={`${styles.carouselArrow} ${styles.arrowLeft}`}
			style={currentIndex! == 0 ? { display: 'none' } : {}}
			onClick={onClick}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<circle cx='12' cy='12' r='10'></circle>
				<polyline points='12 8 8 12 12 16'></polyline>
				<line x1='16' y1='12' x2='8' y2='12'></line>
			</svg>
		</div>
	);

	const NextArrow = ({ onClick }: IArrowProps) => (
		<div
			className={`${styles.carouselArrow} ${styles.arrowRight}`}
			onClick={onClick}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<circle cx='12' cy='12' r='10'></circle>
				<polyline points='12 16 16 12 12 8'></polyline>
				<line x1='8' y1='12' x2='16' y2='12'></line>
			</svg>
		</div>
	);

	const settings = {
		className: styles.storeCarousel,
		dots: true,
		infinite: true,
		speed: 500,
		initialSlide: 0,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <NextArrow onClick={next} />,
		prevArrow: <PrevArrow onClick={previous} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
		afterChange: (current: number) => {
			setCurrentIndex(current);
		},
	};

	return (
		<>
			{!loading && !error && (
				<div className='one-column-layout-row main-placement-4'>
					<div className={styles.carouselContainer}>
						<div className={styles.title}>
							<h4 className={styles.h4}>
								EXPLORE STORES NEAR YOU
							</h4>
						</div>
						<Slider {...settings} ref={slider}>
							{data.stores.map(
								(store: {
									id: number;
									txtHeader: string;
									txtLink: string;
									imgBackground: string;
								}) => (
									<ImgCarousel
										key={store.id}
										storeName={store.txtHeader}
										imgAlt={store.txtHeader}
										imgBackground={store.imgBackground}
									/>
								)
							)}
						</Slider>
					</div>
				</div>
			)}
		</>
	);
};

export default Carousel;
