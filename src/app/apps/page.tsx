import AppCard from '@/components/cards/AppsCard';
import { getApps } from '@/lib/apps';
import { TApp } from '@/types/apps.type';
import React from 'react';

const AppPage = async() => {
   const apps = await getApps();
    return (
        <div className='container mx-auto py-10 px-4 sm:px-6 lg:px-8 grid gap-12'>
            <div className='flex flex-col justify-center items-center gap-5'>

            <h3 className='text-4xl font-bold'>All Apps</h3>
            <p className=' text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    apps.map((app: TApp, ind: number) => <AppCard key={ind} app={app} />)
                }
            </div>
        </div>
    );
};

export default AppPage;