import './App.css'
import * as Constants from "./Settings"
import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Catalog from './components/Catalog'
import Movie from './components/MovieDetail'

function App() {

  let [currentUser, setCurrentUser] = useState(null)
  let [users, setUsers] = useState(Constants.USERS)
  let [someMovies, setSomeMovies] = useState([])
  let [showModal, setShowModal] = useState(false)
  let [rentedMovie, setRentedMovie] = useState(null)

  async function getSomeMovies() {
    let response = await fetch(Constants.API_QUERY, Constants.API_OPTIONS)
    let data = await response.json()
    setSomeMovies(data.results)
  }

  // Load some movies information at the application start
  useEffect(() => {
    getSomeMovies()
  }, [])

  // Update movies on change in users - rent or unrent
  useEffect(() => {
    getSomeMovies()
  }, [users])
  
  function setUser(id) {
    setCurrentUser(users.find(user => user.id === id))
  }

  function resetUser() {
    setCurrentUser(null)
  }

  function rentMovie(movie, user, action) {
    if (action) {
      if (!isRented(user, movie) && numRented(user) < 5) {
        let newUsers = [...users]
        newUsers.find(u => u.id === user.id).rentals.push(movie)
        setUsers(newUsers)
        setRentedMovie(movie)
        setShowModal(true)
      }
    } else {
      let newRentals = [...user.rentals]
      console.log(newRentals)
      let filtered = newRentals.filter(r => {
        return r.id !== movie.id
      })
      let newUsers = [...users]
      newUsers.find(u => u.id === user.id).rentals = [...filtered]
      setUsers(newUsers)
    }
  }

  function isRented(user, movie) {
    let rental = user.rentals.find(r => r.id === movie.id)
    console.log(user, rental)
    return rental
  }

  function numRented(user) {
    return user.rentals.length
  }

  function searchMovies(query) {
    async function getSearchResults() {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, Constants.API_OPTIONS)
        let data = await response.json()
        setSomeMovies(data.results)
    }
    if (query === "") {
        getSomeMovies()
    } else {
        getSearchResults(query)
    }
}


function closeModal() {
  if (showModal) {
    setShowModal(false)
  } 
}


  return (
    <Router>
      <div className="App">
        <Header navItems={Constants.NAV_ITEMS} resetUser={resetUser} />
      </div>
      <Routes>
        <Route path="/" element={<Landing users={users} setUser = {setUser} />} />
        <Route path="/users/:userID" element={<UserProfile />} />
        <Route path="/catalog" element={<Catalog movies={someMovies} currentUser={currentUser} search = {searchMovies} rent={rentMovie} showModal={showModal} closeModal={closeModal} rentedMovie={rentedMovie} />} />
        <Route path="/movie/:movieID" element ={<Movie />} />
      </Routes>
    </Router>

  )
}
 
export default App