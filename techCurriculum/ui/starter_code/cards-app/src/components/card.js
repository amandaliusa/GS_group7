import React from 'react';
import User from './user.js';
import Message from './message.js';

const Card = (props) => {
    return (
        <div className='card'>
            <User name={props.author}/>
            <div className='card-main'>
                <Message text={props.text}/>
            </div>
        </div>
    );
};

export default Card;