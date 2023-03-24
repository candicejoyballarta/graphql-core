import './styles/App.scss';
import Banners from './components/Banners';
import FAQ from './components/FAQ';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='one-column-layout'>
				<Banners />
				<FAQ />
			</div>
		</ApolloProvider>
	);
}

export default App;
