const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema/schema');

const app = express(cors());

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);
``;
app.listen(4000, () =>
	console.log('Running a GraphQL API server at http://localhost:4000/graphql')
);
