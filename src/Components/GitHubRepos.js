import axios from "axios";
import React, { useState } from "react";
import './GitHubRepos.css'
import gitFork from './fork.png';
import repoIcon from './repo.png';

const GitHubRepos = () => {
    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);
    const [image, setImage] = useState('');
    const [avatarUsername, setAvatarUsername] = useState('');
    const [gitUrl, setGitUrl] = useState('');
    
    const inputHandler = (e) => {
        setUsername(e.target.value);
    }

    const enterButtonHandler = (e) => {
        if(e.keyCode === 13) {
            if(username === ''){
                alert('Please enter a username first');
            }
            else {
                axios.get(`https://api.github.com/users/${username}/repos`)
                .then((response)=>{
                    setData(response.data);
                    setImage(response.data[0].owner.avatar_url);
                    setAvatarUsername(response.data[0].owner.login);
                    setGitUrl(response.data[0].owner.html_url);
                    document.querySelector(".avatarImg").style.display = "block";
                    document.querySelector(".tempTag").style.display = "block";
                }).catch((error) =>
                    alert("You entered invalid username. Please try again!")
                );
            }
        }
    }

    const buttonHandler = () => {
        if(username === ''){
            alert('Please enter a username first');
        }
        else {
            axios.get(`https://api.github.com/users/${username}/repos`)
            .then((response)=>{
                setData(response.data);
                setImage(response.data[0].owner.avatar_url);
                setAvatarUsername(response.data[0].owner.login);
                setGitUrl(response.data[0].owner.html_url);
                document.querySelector(".avatarImg").style.display = "block";
                document.querySelector(".tempTag").style.display = "block";
            }).catch((error) =>
                alert("You entered invalid username. Please try again!")
            );
        }
    }
    
    return (
        <div className="app">
            <h1 className="title">GitHub Repos</h1>
            <div className="inputOutputContainer">
                <input className='inputField' onChange={inputHandler} value={username} onKeyDown={enterButtonHandler} placeholder="Enter your github username"></input>
                <button className='btn' onClick={buttonHandler}>Get Repos</button>
            </div>
            <div className="infoContainer">
                <a href={gitUrl}><img className='avatarImg' src={image} alt="Avatar"/></a>
                <a href={gitUrl}><h2 className="avatarName">{avatarUsername}</h2></a>
            </div>
            <h1 className="tempTag">Repositories</h1>
            <div className="repoContainer"> 
                {data.map((repo) =>
                    <div className="repoInfo">
                        <a href={repo.html_url}><h2 className="repoName"><img className="repoIcon" src={repoIcon} alt='Repository'/> {repo.name}</h2></a>
                        <p className="description">{repo.description}</p>
                        <p className="forkAndStarIconContainer"><img className='fork' src={gitFork} alt="Fork"/> {repo.forks_count} <span className="starSpan">&#9733;</span> {repo.stargazers_count} </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GitHubRepos;