import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Gif from './components/Gif';
import GifList from './components/GifList';
import CreateGif from './components/CreateGif';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [gifs, setGifs] = useState([]);
  const [selectedGifid, setSelectedGifId] = useState(undefined);

  useEffect(() => {
    (async() => {
      const fetchedGifs = await fetch("api/v1/gifs");
      const data = await fetchedGifs.json()
      setGifs(data);
    })()
  }, [])

  const selectedGif = () => {
    if(selectedGifid === undefined) {
      return gifs[0]
    }
    return gifs.find(gif => gif.id === selectedGifid)
  }

  const search = (userInput) => {
    if (gifs.find(gif => gif.title.toLowerCase() === userInput.toLowerCase()) !== undefined) {
     setSelectedGifId(gifs.find(gif => gif.title.toLowerCase() === userInput.toLowerCase()).id)
    }
    else {
      setSelectedGifId(gifs[1].id)
    }
  }

  if(!gifs) {
    return (
      <>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </>
    )
  }

  return (
    <div className="App">
      <NavBar search={search} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
            <Gif gif={selectedGif()} leftPanel={true}/>
          </div>
          <div className="col-sm-12 col-md-8">
            <GifList gifs={gifs} setSelectedGifId={setSelectedGifId}/>
          </div>
        </div>
        <CreateGif gifs={gifs} setGifs={setGifs} />
      </div>
    </div>
  );
}

export default App;
