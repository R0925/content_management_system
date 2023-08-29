'use client';

import { type } from 'os';
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'


interface ContextProps {
    activeSideBar: boolean,
    setActiveSideBar: Dispatch<SetStateAction<boolean>>,

    pageName: string,
    setPageName: Dispatch<SetStateAction<string>>,
}

const GlobalContext = createContext<ContextProps>({
    activeSideBar: false,
    setActiveSideBar: (): boolean => false,

    pageName: '',
    setPageName: (): string => '',
})

export const GlobalContextProvider = ({ children }) => {

    const [activeSideBar, setActiveSideBar] = useState<boolean>(false);
    const [pageName, setPageName] = useState<string>('');

    return (
        <GlobalContext.Provider value={{ activeSideBar, setActiveSideBar, pageName, setPageName }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);