import Image from 'next/image';
import React from 'react';

import sample from '../../assets/6.jpg';
import preview from '../../assets/preview.jpg';

function NftDropPage() {
	return (
		<div className="flex flex-col h-screen lg:grid lg:grid-cols-10">
			{/* Left side */}
			<div className="bg-gradient-to-bl from-purple-700 to-cyan-500 flex justify-center items-center flex-col p-8 lg:min-h-screen lg:col-span-4">
				<div className="bg-gradient-to-br from-yellow-400 to-purple-600 flex p-1 rounded-xl">
					<Image src={sample} alt="sample" className="w-44 rounded-xl object-cover lg:w-96" />
				</div>
				<h1 className="text-white text-center text-4xl my-4">PaZi Landscapes</h1>
				<h2 className="text-white text-center text-2xl">A collection of nice Landscapes</h2>
			</div>

			{/* Right side */}
			<div className="lg:col-span-6 p-8 lg:p-12">
				{/* Header */}
				<header className="flex items-center justify-between">
					<h1 className="cursor-pointer text-xl font-light text-center">
						The <span className="font-extrabold underline decoration-purple-700">PaZi</span> NFT
						Marketplace
					</h1>
					<button className="rounded-full text-xs font-bold bg-purple-600 text-white px-4 py-2 lg:px-6 lg:py-3 lg:text-base">
						Sign In
					</button>
				</header>
				<hr className="my-2 border-2 border-gray-200" />
				<main className="flex items-center mt-8 flex-col space-y-4 lg:space-y-8">
					<Image src={preview} alt="preview" className="w-72 rounded-xl object-cover lg:w-80" />
					<h2 className="text-xl font-bold text-center lg:font-extrabold lg:text-3xl">
						The PaZi Landscape Collection | NFT Drop
					</h2>
					<p className="text-green-400">0 / 20 NFT's minted</p>
				</main>

				{/* Mint button */}
				<button className="py-3 mt-4 w-full rounded-full bg-purple-600 text-white font-bold shadow-sm hover:shadow-lg active:scale-95 transition duration-250 lg:mt-8">
					Mint NFT (0.01 ETH)
				</button>
			</div>
		</div>
	);
}

export default NftDropPage;
