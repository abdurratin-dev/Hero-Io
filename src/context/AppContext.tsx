'use client'
import { TApp } from '@/types/apps.type';
import React, { createContext, useState } from 'react';

interface IAppContext{
    install: TApp[];
    setInstall: React.Dispatch<React.SetStateAction<TApp[]>>;
}
export const AppContext = createContext<IAppContext>({
    install: [],
    setInstall: ()=>{},
});

const AppProvider = ({children} : {children: React.ReactNode}) => {
    const [install, setInstall] = useState<TApp[]>([]);
    const sheard = {
        install,
        setInstall
    }
    return (
        <AppContext.Provider value={sheard}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;