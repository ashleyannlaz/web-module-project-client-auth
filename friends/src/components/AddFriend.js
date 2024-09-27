import React, {useState} from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const newFriend = {
    id: '',
    name: '',
    age: '',
    email: '',
}

function AddFriend() {
    const [newFriends, setNewFriends ] = useState(newFriend);

    const handleChange = (e) => {
        setNewFriends({
           ...newFriends,
           [e.target.name]: e.target.value
        }) 
        console.log(newFriends)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', newFriends)
        .then(res => {
            console.log(newFriends)
        })

    }

    return (
        <div>
            Lets add a friend!
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={newFriends.name}
                onChange={handleChange}            
            />
            <input
                type="text"
                name="age"
                value={newFriends.age}
                onChange={handleChange}            
            />
            <input
                type="text"
                name="email"
                value={newFriends.email}
                onChange={handleChange}            
            />
            <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend
