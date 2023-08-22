// Information about a single movie

import React from "react"
import * as Constants from '../Settings'

export default function MovieInfoCard({movieInfo}) {


    return(
        <div className="movie-info-card">
            <h1>{movieInfo.original_title}</h1>
            <p>{movieInfo.overview}</p>
            <img src={Constants.POSTER_BASE_URL + Constants.POSTER_SIZE + movieInfo.poster_path} width={150}></img>
        </div>
    )

}