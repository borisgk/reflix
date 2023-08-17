// A testing component to get started with the movies information

import React from "react"
import MovieCard from "./MovieCard"

export default function PopularMovies({movies}) {

    return (
        <div>
            <h1>Watch the most popular movies!</h1>
            <div class="movies-grid">
                {movies.slice(0, 10).map(movie => <MovieCard movie={movie} />)}
            </div>
        </div>
    )

}