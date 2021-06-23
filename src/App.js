import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const colors = {
	blue: {
		300: '#88B3C4',
		400: '#669DB3',
		500: '#4C8399',
	},
	red: {
		300: '#F27473',
		400: '#EE4645',
		500: '#EA1715',
	},
};
const theme = extendTheme({ colors });

function App({ Component }) {
	return (
		<ChakraProvider theme={theme}>
			<>
				<Header />
				<Hero />
				<Features />
				<Footer />
			</>
		</ChakraProvider>
	);
}

export default App;
