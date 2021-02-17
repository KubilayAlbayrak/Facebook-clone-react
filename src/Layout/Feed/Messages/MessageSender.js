import { Avatar } from '@material-ui/core';
import { InsertEmoticonSharp, PhotoLibrarySharp, VideocamSharp } from '@material-ui/icons';
import React , {useState,useEffect} from 'react';
import './MessageSender.css';


function MessageSender() {

const [input, setInput] = useState('');
const [imageUrl, setImageUrl] = useState('')

const hiddensubmithandler = (val) => {
    val.preventDefault();
    setInput();
    setImageUrl();
};

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
            <Avatar src='/images/vesikalık.png' style={{marginTop:15}}/>
            <form>
                <input 
                value={input}
                onChange={() => setInput()}
                className='messageSender__input'
                placeholder={'Whats on your mind?'}
                />
                <input 
                className='messageSender__imageUrl'
                value={imageUrl}
                onChange={() => setImageUrl()}
                placeholder='İmage URL (optional)'
                />
                <button onClick={hiddensubmithandler} type='submit'>
                    Hidden submit
                </button>
            </form>
            </div>
            <div  className='messageSender__bottom'>
                <div className='messageSender__option'>
            <VideocamSharp style={{color:'red'}}/>
                <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
            <PhotoLibrarySharp style={{color:'green'}}/>
                <h3>Photo / Video </h3>
                </div>
                <div className='messageSender__option'>
            <InsertEmoticonSharp style={{color:'orange'}}/>
                <h3>Feeling Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
