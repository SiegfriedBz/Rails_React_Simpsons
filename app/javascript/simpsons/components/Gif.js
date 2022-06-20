import React, { useState } from 'react'
import InfoModal from './InfoModal'
import clsx from "clsx"

const Gif = (props) => {
  const {gif, setSelectedGifId} = props
  const myButtonClass = clsx({
    "btn btn-sm btn-primary my-1": true,
    "d-none": props.leftPanel})


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {gif &&
      <>
        <div className="card my-card">
          <div className="d-flex flex-column justify-content-end">
            <img src={gif.url} className="card-img-top my-card-image" alt="gif" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">{gif.title}</h5>
              <button
                onClick={() => {
                  setSelectedGifId(gif.id)
                  handleShow()
                }}
                className={myButtonClass}
              >Select
              </button>
            </div>
          </div>
        </div>
        <InfoModal
          size="lg"
          gif={gif}
          handleClose={handleClose}
          show={show}
        />
      </>
      }
    </>
   )
}

export default Gif
