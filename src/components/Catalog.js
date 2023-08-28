import React from "react"
import { useEffect } from "react"
import MovieCard from "./MovieCard"
import SearchBar from "./SearchBar"
import Modal from "./Modal"

export default function Catalog({movies, currentUser, search, rent, showModal, closeModal, rentedMovie}) {


useEffect(() => {
    search("")
}, [])


    return (
        <div>
            <Modal showModal={showModal} closeModal={closeModal} movie={rentedMovie} />
            <SearchBar searchFun = {search} user = {currentUser} /> 
            {currentUser ? currentUser.rentals.length > 0
            ?
            <div>
                <h1 className="section-heading">Rented movies</h1>
                <div className="movies-grid">
                    {currentUser.rentals.map(movie => <MovieCard movie={movie} user={currentUser} rented={true} rent={rent} />)}
                </div>
            </div>
                
                : null : null}


            <h1 className="section-heading">Movies Popular Right Now</h1>
            <div className="movies-grid">
                {movies.slice(0, 10).map(movie => <MovieCard movie={movie} user={currentUser} rented={false} rent={rent} />)}
            </div>
        </div>
    )
}
