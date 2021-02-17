import React from 'react';
import './Feed.css';
import MessageSender from './Messages/MessageSender';
import StoryReel from './StoryReel/StoryReel';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
        </div>
    )
}

export default Feed
