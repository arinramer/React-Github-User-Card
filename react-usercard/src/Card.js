import React from 'react';
import Follower from './Follower';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: row
`
const Profile = styled.div`
    display: flex;
    flex-direction: column
`
const Followerlist = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20%;
`

const Card = props => {
    return(
        <div className="container">
            <div className="cards">
                <div className="card">
                    <div className="card-info">
                        <Box>
                            <Profile>
                                <img alt="avatar" className="profile" src={props.avatar}/>
                                <h1 className="name">{props.name}</h1>
                                <p className="username">{props.username}</p>
                                <p>{props.bio}</p>
                                <a href={props.url}><p>Profile</p></a>
                                <p>Location: {props.location}</p>
                                <p>Followers: {props.followers}</p>
                            </Profile>
                            <Followerlist>
                                <div><p>List of followers: </p>{props.followerlist.map(item => {
                                    return <Follower key={item.id} name={item.login} url={item.html_url}/>
                                })}
                                </div>
                            </Followerlist>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;