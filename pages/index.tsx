import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>NFT Meme Drop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>
				<div></div>
			</main>
		</div>
	);
};

export default Home;
