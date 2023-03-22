const { Banners, VidBanners, FAQs } = require('../mockData');

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Banner Type
const BannerType = new GraphQLObjectType({
	name: 'Banner',
	fields: () => ({
		id: {
			type: GraphQLNonNull(GraphQLID),
		},
		txtHeader: {
			type: GraphQLString,
		},
		txtDescription: {
			type: GraphQLString,
		},
		imgBackground: {
			type: GraphQLString,
		},
		buttons: {
			type: new GraphQLList(ButtonType),
		},
	}),
});

// VidBanner Type
const VidBannerType = new GraphQLObjectType({
	name: 'VidBanner',
	fields: () => ({
		id: {
			type: GraphQLNonNull(GraphQLID),
		},
		txtHeader: {
			type: GraphQLString,
		},
		txtDescription: {
			type: GraphQLString,
		},
		vidBackground: {
			type: GraphQLString,
		},
		buttons: {
			type: new GraphQLList(ButtonType),
		},
	}),
});

// Button Type
const ButtonType = new GraphQLObjectType({
	name: 'Button',
	fields: () => ({
		id: { type: GraphQLID },
		btnText: { type: GraphQLString },
	}),
});

// FAQ Type
const FAQsType = new GraphQLObjectType({
	name: 'FAQ',
	fields: () => ({
		id: { type: GraphQLID },
		txtQuestion: { type: GraphQLString },
		txtAnswer: { type: GraphQLString },
	}),
});
