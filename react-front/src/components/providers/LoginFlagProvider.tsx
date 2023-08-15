import { Dispatch, SetStateAction, createContext, useState } from "react";

export const LoginFlagContext = createContext({} as {
    loginFlag: boolean,
    setLoginFlag: Dispatch<SetStateAction<boolean>>,
});

export const LoginFlagProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    //ログインしているかどうかのフラグ
    const [loginFlag, setLoginFlag] = useState<boolean>(false);

    return (
        <LoginFlagContext.Provider value={{ loginFlag, setLoginFlag }}>
            {children}
        </LoginFlagContext.Provider>
    );
};