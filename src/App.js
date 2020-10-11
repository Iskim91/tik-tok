import React, { useState, useEffect } from 'react';
import './App.css';
import  Video from './Video.js';
import db from "./Firebase.js";

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map((doc) => doc.data()))
    }
    )
  }, [videos])

  return (
    // BEM convention
    <div className="app">

      <div className="app__videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares }, i) => (
            <Video 
              key={i}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
