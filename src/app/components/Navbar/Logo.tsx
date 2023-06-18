'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation';
const Logo = () => {
    const router = useRouter();

    return (
        <Image
            alt='logo'
            height='100'
            width='100'
            src="/img/logo.svg"
            className='hidden md:block cursor-pointer'
        />
    )


};


export default Logo;