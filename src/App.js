import './App.css'
import * as Constants from "./Settings"
import React, {useEffect, useState} from 'react'
import PopularMovies from './components/PopularMovies'
import Header from './components/Header'
import Landing from './components/Landing'

function App() {

  let [popularMovies, setPopularMovies] = useState([])

  // Loading some movies information at the application start
  useEffect(() => {
    async function getSomeMovies() {
      let response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc", Constants.API_OPTIONS)
      let data = await response.json()
      console.log(data.results)
      setPopularMovies(data.results)
    }
    getSomeMovies()
  }, [])
  
  return (
    <div className="App">
      <Landing />
    </div>  
  )
 
  /*
  return (
    <div className="App">
      <Header navItems={Constants.NAV_ITEMS} />
      <PopularMovies movies={popularMovies} />
    </div>
  ) */
}

export default App