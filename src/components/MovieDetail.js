// Showing info about a single movie

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as Constants from '../Settings'
import MovieInfoCard from "./MovieInfoCard"

export default function MovieDetail() {

    const {movieID} = useParams()

    let [movieInfo, setMovieInfo] = useState({})

    useEffect(() => {
        async function getMovieInfo(id) {
            let response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, Constants.API_OPTIONS)
            let data = await response.json()
            setMovieInfo(data)
        }
        getMovieInfo(movieID)
    }, [])

    

    return (

        <div className="movie-info" style={ { backgroundImage: `url(${Constants.BACKDROP_BASE_URL + Constants.BACKDROP_SIZE + movieInfo.backdrop_path})` } }>
            <MovieInfoCard movieInfo={movieInfo} />
        </div>

    )

}