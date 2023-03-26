import { gql } from '@apollo/client';

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

const GET_STORES = gql`
	query getStores {
		stores {
			id
			imgBackground
			txtLink
		}
	}
`;

export { GET_BANNERS, GET_STORES };