import React from 'react';
import AppCard from '../cards/AppsCard';
import { getApps } from '@/lib/apps';
import { TApp } from '@/types/apps.type';

const TrendingApps = async() => {
    const apps = await getApps();
    return (
        <div className='container mx-auto py-10 px-4 sm:px-6 lg:px-8 grid gap-12'>
            <div className='flex flex-col justify-center items-center gap-5'>

            <h3 className='text-4xl font-bold'>Treanding Apps</h3>
            <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    apps.slice(0,6).map((app: TApp, ind: number) => <AppCard key={ind} app={app} />)
                }
            </div>
        </div>
    );
};

export default TrendingApps;