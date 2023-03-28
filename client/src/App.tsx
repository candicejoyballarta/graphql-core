import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Banners from './components/Banners';
import FAQs from './components/FAQs';
import Carousel from './components/Carousel';
import VidBanner from './components/VidBanner';
import './styles/App.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='one-column-layout'>
				<div className='one-column-layout-row'>
					<div id='mobile'></div>
					<div id='desktop'></div>
				</div>
				<Banners />
				<Carousel />
				<VidBanner />
				<FAQs />
			</div>
		</ApolloProvider>
	);
}

export default App;
