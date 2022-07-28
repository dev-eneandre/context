import React, { createContext, useState } from "react";


export const StoreContext = createContext();

export const StoreProvider = (props) => {
    
    const [store, setStore] = useState([
        {name : "CatSuit", size : "L", code : 245},
        {name : "Gown", size : "s", code : 287},
        {name : "shorts", size : "m", code : 2564},
        {name : "jean", size : "xl", code : 2454},
        {name : "cap", size : "m", code : 2222},
    ])

    return(
        <StoreContext.Provider value={[store,setStore] }>
            {props.children}
        </StoreContext.Provider>
    )
}