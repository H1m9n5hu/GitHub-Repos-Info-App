import axios from "axios";
import React, { useState } from "react";

const GitHubRepos = () => {
    const [username, setUsername] = useState('');
    
    const inputHandler = (e) => {
        setUsername(e.target.value);
    }
    const buttonHandler = () => {
        axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response)=>{
        console.log(response.data);
        });
    }
    
    return (
        <div>
            <h1>GitHub Repos</h1>
            <div>
                <input onChange={inputHandler} value={username} placeholder="Enter your username"></input>
                <button onClick={buttonHandler}>Get Repos</button>
            </div>
        </div>
    )
}

export default GitHubRepos;