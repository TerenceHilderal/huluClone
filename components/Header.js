import React from 'react';
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
	HomeIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

function Header() {
	return (
		<header className=' flex flex-col sm:flex-row justify-between items-center m-5 h-auto'>
			<div className='flex flex-grow max-w-2xl justify-evenly'>
				<HeaderItem Icon={HomeIcon} title='HOME' />
				<HeaderItem Icon={LightningBoltIcon} title='TRENDING' />
				<HeaderItem Icon={BadgeCheckIcon} title='VERIFIED' />
				<HeaderItem Icon={CollectionIcon} title='COLLECTIONS' />
				<HeaderItem Icon={SearchIcon} title='SEARCH' />
				<HeaderItem Icon={UserIcon} title='ACCOUNT' />
			</div>
			<Image
				className='object-contain '
				src='https://links.papareact.com/ua6'
				alt='hulu logo'
				width={200}
				height={100}
			/>
		</header>
	);
}

export default Header;
