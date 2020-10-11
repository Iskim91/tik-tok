import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({url, channel, description, song, likes, messages, shares }) {

    const [playing, setPlaying] = useState(true)

    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }
    
    return (
        <div className="video">
            <video 
            className="video__player" 
            onClick={onVideoPress}
            loop
            // autoPlay={playing}
            ref={videoRef}
            src={url} />
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
