import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);


export const MyUserContext = (props)=>{
    const[loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null)
   

    const value = {
        loggedIn,
        setLoggedIn,
        userData, 
        setUserData
    }
    return <UserContext.Provider value={value}>
                {props.children}
           </UserContext.Provider>
}
