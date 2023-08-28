import React, { useEffect } from "react"
import { useState } from "react"
import "./Modal.css"

export default function Modal({showModal, closeModal, movie}) {


    let [movieGIF, setMovieGIF] = useState(null)
    let [showGIF, setShowGIF] = useState(false)
 
    async function fetchMovieGIF(movie) {
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=cbPqK1ONHSY41DQ4YNLDOAkRlxfvjB2a&q=${movie.original_title}&limit=1`)
        let data = await response.json()
        setMovieGIF(data.data[0].embed_url)
        setShowGIF(true)
    }

    useEffect(() => {
            if (movie) {
                fetchMovieGIF(movie)
            } else {
                setMovieGIF(null)
            }
            return(() => {
                setShowGIF(false)
                setMovieGIF(null)
            })
    }, [movie])

    return (

        showModal ? 

        <div className="modal">
            
            <div className="modal-content">
            <div><span className="close" onClick={() => closeModal()}>&times;</span>Rented {movie.original_title} Sucessfully!</div>
            {showGIF ? <iframe className="movie-gif" src={movieGIF} title="Movie GIF"></iframe> : null }
            </div>
        </div>

        :

        null 
    )
}