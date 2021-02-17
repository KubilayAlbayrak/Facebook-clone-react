import React from 'react';
import Story from './Story';
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image='https://images.pexels.com/photos/4622481/pexels-photo-4622481.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4622481.jpg&fm=jpg'
            profileSrc='https://images.pexels.com/photos/6303785/pexels-photo-6303785.jpeg?cs=srgb&dl=pexels-klaus-nielsen-6303785.jpg&fm=jpg'
            title='Nundo Asssapa'
            />
            <Story
            image='https://images.pexels.com/photos/6801447/pexels-photo-6801447.jpeg?cs=srgb&dl=pexels-ksenia-chernaya-6801447.jpg&fm=jpg'
            profileSrc='https://images.pexels.com/photos/4484145/pexels-photo-4484145.jpeg?cs=srgb&dl=pexels-lina-kivaka-4484145.jpg&fm=jpg'
            title='Alex Handrol'
            />
            <Story
            image='https://images.pexels.com/photos/5563313/pexels-photo-5563313.jpeg?cs=srgb&dl=pexels-bruno-cervera-5563313.jpg&fm=jpg'
            profileSrc='https://images.pexels.com/photos/4557467/pexels-photo-4557467.jpeg?cs=srgb&dl=pexels-anna-shvets-4557467.jpg&fm=jpg'
            title='Elisabette Leon'
            />
            <Story
            image='https://images.pexels.com/photos/6154807/pexels-photo-6154807.jpeg?cs=srgb&dl=pexels-john-lee-6154807.jpg&fm=jpg'
            profileSrc='https://images.pexels.com/photos/6385384/pexels-photo-6385384.jpeg?cs=srgb&dl=pexels-jane-grn-6385384.jpg&fm=jpg'
            title='Alexandra Parten'
            />
            <Story
            image='https://images.pexels.com/photos/5014244/pexels-photo-5014244.jpeg?cs=srgb&dl=pexels-sinitta-leunen-5014244.jpg&fm=jpg'
            profileSrc='https://images.pexels.com/photos/4946399/pexels-photo-4946399.jpeg?cs=srgb&dl=pexels-maria-orlova-4946399.jpg&fm=jpg'
            title='Miya Andastre'
            />
        </div>
    )
}

export default StoryReel
