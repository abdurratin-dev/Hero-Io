import Image from 'next/image';
import React from 'react';
import NotFoundImg from '@/assets/App-Error.png'

const NotFoundPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Image src={NotFoundImg} alt='App Not found' className='object-cover' />
        </div>
    );
};

export default NotFoundPage;