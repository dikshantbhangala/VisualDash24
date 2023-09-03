import React,{createContext,useMemo,useContext} from "react";
import { useMemo } from "react";
import (io) from 'socket.io-client';
export const useSocket =() =>{
    const socket =useContext(SocketContext);
    return socket;
}
const SocketContext =createContext(null);
export const SocketProvider =(props) =>{
    const socket = useMemo(() =>io('localhost:3001'),[])
    return(
        
        <SocketContext.Provider value={}>
            {props.children}
        </SocketContext.Provider>
    )
}