import { gql } from '@apollo/client';

const GET_BANNERS = gql`
	query getBanners {
		banners {
			id
			imgHeader
			txtHeader
			txtDescription
			imgBackground
			buttons {
				btnText
			}
		}
	}
`;

const GET_STORES = gql`
	query getStores {
		stores {
			id
			txtHeader
			txtLink
			imgBackground
		}
	}
`;

const GET_VIDBANNERS = gql`
	query getVidBanners {
		vidBanners {
			id
			txtHeader
			vidBackground
			buttons {
				id
				btnText
				btnIcon
			}
			style
		}
	}
`;

const GET_FAQS = gql`
	query getFAQs {
		faqs {
			id
			txtQuestion
			txtAnswer
		}
	}
`;

export { GET_BANNERS, GET_STORES, GET_VIDBANNERS, GET_FAQS };
