import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const CreateGif = ({gifs, setGifs}) => {

  const [newGif, setNewGif] = useState({title:"", url:""})

  const handleCreate = (e) => {
    e.preventDefault()
    setGifs([...gifs, {...newGif, id: uuidv4()}])
    setNewGif({title:"", url:""})
  }

  return (
    <form onSubmit={handleCreate} className="form-group my-3">
        <label htmlFor="gif-title">Title</label>
        <input
          type="text"
          className="form-control"
          id="gif-title"
          placeholder="Enter title"
          value={newGif.title}
          onChange={(e) => setNewGif({...newGif, title: e.target.value})}
        />
        <label htmlFor="gif-url">URL</label>
        <input
          type="text"
          className="form-control"
          id="gif-url"
          placeholder="Enter URL"
          value={newGif.url}
          onChange={(e) => setNewGif({...newGif, url: e.target.value})}
        />
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  )
}

export default CreateGif
