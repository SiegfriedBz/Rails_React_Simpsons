import React from 'react'
import clsx from "clsx"

const Gif = (props) => {
  const {gif, setSelectedGifId} = props
  const myButtonClass = clsx({
    "btn btn-sm btn-primary my-1": true,
    "d-none": props.leftPanel})


  return (
    <div className="card my-card">
        <div className="d-flex flex-column justify-content-end">
          <img src={gif.url} className="card-img-top my-card-image" alt="gif" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center">{gif.title}</h5>
            <button
              onClick={() => setSelectedGifId(gif.id)}
              className={myButtonClass}
            >Select
            </button>
          </div>
        </div>
      </div>
  )
}

export default Gif
