import { createContext,useContext,useState,useEffect } from "react";

const CreateContext=createContext({});

export const AppContext=({children})=>{


const value={};
    return (<CreateContext.Provider value={value}>{children}</CreateContext.Provider>)
}

export const useAppContext=()=>{
    const context=useContext(CreateContext);
    if(!context){
        throw new Error("useAppContext must be used within an AppContext");
    }
    return context;
}