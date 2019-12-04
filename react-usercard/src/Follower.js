import React from 'react';

const Follower = props => {
    return(
        <p>
            <a href={props.url}>{props.name}</a>
        </p>
    )
}

export default Follower;