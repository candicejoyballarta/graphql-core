import React from 'react';

type Props = {
	imgBackground: string;
	imgAlt: string;
};

const ImgCarousel = (props: Props) => {
	return <img src={props.imgBackground} alt={props.imgAlt} />;
};

export default ImgCarousel;
