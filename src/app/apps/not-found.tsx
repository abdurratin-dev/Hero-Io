import Image from 'next/image';
import React from 'react';
import NotFoundImg from '@/assets/error-404.png'

const NotFoundPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Image src={NotFoundImg} alt='Page Not found' className='object-cover' />
        </div>
    );
};

export default NotFoundPage;