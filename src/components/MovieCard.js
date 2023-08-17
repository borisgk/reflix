// A card to show an individual movie

import React from "react"
import * as Constants from "../Settings"

export default function MovieCard({movie}) {

    return(
        <div className="movie-card">
            <img className="movie-poster" src={Constants.POSTER_BASE_URL + Constants.POSTER_SIZE + movie.poster_path}></img>
            <div className="movie-title">{movie.title}</div>
            <button className="movie-button">+</button>
        </div>
    )

}