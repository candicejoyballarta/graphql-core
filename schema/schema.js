const { Banners, VidBanners, FAQs } = require('../mockData');

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLNonNull,
	GraphQLList,
	GraphQLSchema,
} = require('graphql');

// Banner Type
const BannerType = new GraphQLObjectType({
	name: 'Banner',
	description: 'This represents a banner widget',
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

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: {
		banner: {
			type: new GraphQLList(BannerType),
			description: 'List of All Banners',
			resolve: () => Banners,
		},
		vidBanner: {
			type: new GraphQLList(VidBannerType),
			description: 'List of All Video Banners',
			resolve: () => VidBanners,
		},
		faqs: {
			type: new GraphQLList(FAQsType),
			description: 'List of All FAQs',
			resolve: () => FAQs,
		},
	},
});

const schema = new GraphQLSchema({
	query: RootQueryType,
});

module.exports = { schema };
