import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>NFT Meme Drop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>
				<div className="flex justify-center my-4 ">
					<Link
						className="font-bold text-3xl text-purple-600 cursor-pointer transition ease-in-out duration-150 active:scale-95 hover:drop-shadow-xl hover:scale-105"
						href="/nft/details"
					>
						Go to the detailspage
					</Link>
				</div>
			</main>
		</div>
	);
};

export default Home;
