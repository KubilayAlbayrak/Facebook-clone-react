import React from 'react';
import Story from './Story';
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image='https://images.pexels.com/photos/4622481/pexels-photo-4622481.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4622481.jpg&fm=jpg'
            profileSrc='https://images.pexels.com/photos/6303785/pexels-photo-6303785.jpeg?cs=srgb&dl=pexels-klaus-nielsen-6303785.jpg&fm=jpg'
            title='Kubilay'
            />
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </div>
    )
}

export default StoryReel
