const { Banners, VidBanners, Stores, FAQs } = require('../mockData');

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
		imgHeader: {
			type: GraphQLString,
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
			type: ButtonType,
		},
		style: {
			type: GraphQLString,
		},
	}),
});

const StoreType = new GraphQLObjectType({
	name: 'Store',
	fields: () => ({
		id: {
			type: GraphQLNonNull(GraphQLID),
		},
		txtHeader: {
			type: GraphQLString,
		},
		txtLink: {
			type: GraphQLString,
		},
		imgBackground: {
			type: GraphQLString,
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
const FAQType = new GraphQLObjectType({
	name: 'FAQ',
	fields: () => ({
		id: { type: GraphQLID },
		txtQuestion: { type: GraphQLString },
		txtAnswer: { type: new GraphQLList(GraphQLString) },
	}),
});

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: {
		banners: {
			type: new GraphQLList(BannerType),
			description: 'List of All Banners',
			resolve: () => Banners,
		},
		vidBanners: {
			type: new GraphQLList(VidBannerType),
			description: 'List of All Video Banners',
			resolve: () => VidBanners,
		},
		stores: {
			type: new GraphQLList(StoreType),
			description: 'List of All Stores',
			resolve: () => Stores,
		},
		faqs: {
			type: new GraphQLList(FAQType),
			description: 'List of All FAQs',
			resolve: () => FAQs,
		},
	},
});

const schema = new GraphQLSchema({
	query: RootQueryType,
});

module.exports = { schema };
