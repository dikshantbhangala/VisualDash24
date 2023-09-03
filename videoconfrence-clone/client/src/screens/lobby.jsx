import React, { useState, useCallback } from 'react';
import {useSocket} from '../context/SocketProvider';
const lobbyscreen =()=>{
    const[email , setEmail]= useState("");
    const[room, setRoom]=  useState("");
   const socket = useSocket();
   
    const handleSubmitForm= useCallback((event) => {
        event.preventDefault();
        socket.emit("room:join",{email , room});
        console.log({
            email,
            room,
        });
        
    }, [email,room,socket])
    return(
        <div>
            <h1>lobby</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor='email'>Email ID</label>
                <input type="email" 
                id='email'
                 value={email}
                onChange={(event) => setEmail(event.target.value)}/>
                <br />
                <label htmlFor='room'>Room Number</label>
                <input type="text" id='room' value={room} onChange={(event) => setRoom(event.target.value)}/>
                <br/>
                <button>Join</button>
            </form>
        </div>
    )
}
export default lobbyscreen;