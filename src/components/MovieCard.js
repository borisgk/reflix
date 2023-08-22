// A card to show an individual movie

import React from "react"
import * as Constants from "../Settings"
import { Link } from "react-router-dom"

export default function MovieCard({movie, user, rented, rent}) {

    let posterURL = Constants.POSTER_BASE_URL + Constants.POSTER_SIZE + movie.poster_path

    const movieInfoLink = "/movie/" + movie.id

    return(
        <div className="movie-card">
            <Link to={movieInfoLink}>
                <div className="movie-poster" style={ { backgroundImage: `url(${posterURL})` } }></div>
            </Link>
            <div className="movie-title">{movie.title}</div>
            {user ? 
                rented ? 
                    <button className="movie-button" onClick={() => rent(movie, user, false)}>-</button>
                    :
                    <button className="movie-button" onClick={() => rent(movie, user, true)}>+</button>
                : null}
        </div>
    )

}
