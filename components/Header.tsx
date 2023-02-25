import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';

function Header() {
	return (
		<header className="flex flex-col items-center justify-between space-y-2">
			<h1 className="cursor-pointer text-xl font-light text-center">
				The <span className="font-extrabold underline decoration-purple-700">PaZi</span> NFT
				Marketplace
			</h1>
			<ConnectWallet
				accentColor="#7e22ce"
				colorMode="dark"
				btnTitle="Connect Wallet"
				className="mb-4"
			/>
		</header>
	);
}

export default Header;
