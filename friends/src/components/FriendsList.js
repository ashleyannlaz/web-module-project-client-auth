import axios from 'axios';
import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFriends = []

function FriendsList() {
    const [ friends, setFriends ] = useState(initialFriends);

    const handleClick = () => {
        axiosWithAuth().get('/friends')
        .then( res => {
        console.log("Friends List Retrieved!")
        setFriends(res.data)
  
    });
    
    }
    return (
        <div>
            <button onClick={handleClick}>Get Data</button>
            {
                friends.map(friend => (
                    <div key={friend.id}>
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Friend: {friend.email}</p>
                    </div>
                    
                    ))
            }
        </div>
    )
}

export default FriendsList;
