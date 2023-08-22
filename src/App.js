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

  // User info - this is not a state
  let userInfo = {}

  async function getSomeMovies() {
    let response = await fetch(Constants.API_QUERY, Constants.API_OPTIONS)
    let data = await response.json()
    setSomeMovies(data.results)
  }


  // Load some movies information at the application start
  useEffect(() => {

    // Get some user info - this is just for fun
    async function getUserInfo(userID) {
      let response = await fetch(`https://api.themoviedb.org/3/person/${userID}?language=en-US`, Constants.API_OPTIONS)
      let data = await response.json()
      userInfo[userID] = data
    }
    for (let user of Constants.USERS) {
      getUserInfo(user.id)
    }

    getSomeMovies()

  }, [])

  useEffect(() => {
    getSomeMovies()
  }, users)
  
  function setUser(id) {
    setCurrentUser(users.find(user => user.id === id))
  }

  function resetUser() {
    setCurrentUser(null)
  }

  function rentMovie(movie, user, action) {
    if (action) {
      if (!isRented(user, movie) && numRented(user) < 6) {
        let newUsers = [...users]
        newUsers.find(u => u.id === user.id).rentals.push(movie)
        console.log(newUsers)
        setUsers(newUsers)
      }
    } else {
      let newRentals = [...user.rentals]
      console.log(newRentals)
      let filtered = newRentals.filter(r => {
        return r.id != movie.id
      })
      console.log(filtered)
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


  return (
    <Router>
      <div className="App">
        <Header navItems={Constants.NAV_ITEMS} resetUser={resetUser} />
      </div>
      <Routes>
        <Route path="/" element={<Landing users={users} setUser = {setUser} />} />
        <Route path="/users/:userID" element={<UserProfile />} />
        <Route path="/catalog" element={<Catalog movies={someMovies} currentUser={currentUser} search = {searchMovies} rent={rentMovie}/>} />
        <Route path="/movie/:movieID" element ={<Movie />} />
      </Routes>
    </Router>

  )
}
 
export default App