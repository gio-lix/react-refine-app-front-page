import {createContext, ReactNode, useEffect, useState} from "react";

type GlobalContextProviderProps  = {
    children: ReactNode;
}

interface GlobalContextType {
    theme: boolean
    modal: boolean
    changeTheme: () => void
    openModal: () => void
}

export const GlobalContext = createContext({} as GlobalContextType);

const GlobalContextProvider = ({children}: GlobalContextProviderProps) => {
    const [theme, setTheme] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)

    const body = document.getElementsByTagName('body')[0];

    useEffect(() => {
        if (theme) {
            body.classList.add("body");
        } else {
            body.classList.remove("body")
        }
    },[theme, body.classList])


    const changeTheme = () => {
        setTheme(!theme)
    }
    const openModal = () => {
        setModal(!modal)
    }

    return (
        <GlobalContext.Provider value={{changeTheme,openModal,theme,modal}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider