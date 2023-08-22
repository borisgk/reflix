// User profile -- this is totally out of scope, just for playing with the TMDB API
import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import * as Constants from "../Settings"


export default function UserProfile() {

    const {userID} = useParams()

    let [userInfo, setUserInfo] = useState({})
    let [userCredits, setUserCredits] = useState([])

    // Fetch user information
    useEffect(() => {
        async function getUserInfo(id) {
            let response = await fetch(`https://api.themoviedb.org/3/person/${userID}?language=en-US`, Constants.API_OPTIONS)
            let data = await response.json()
            setUserInfo(data)
        }

        async function getUserCredits(id) {
            let response = await fetch(`https://api.themoviedb.org/3/person/${userID}/movie_credits?language=en-US`, Constants.API_OPTIONS)
            let data = await response.json()
            setUserCredits(data.cast)
        }

        getUserInfo({userID})
        getUserCredits({userID})
    }, [])



    return(
        <div className="userinfo">
            <h1>{userInfo.name}</h1>
            <p class="userbio"><img className="userimg" src={Constants.POSTER_BASE_URL + Constants.POSTER_SIZE + userInfo.profile_path} alt={userInfo.name}></img>
            {userInfo.biography}</p>
            <table>
                {userCredits.sort(function(a,b){
                    return(Date.parse(a.release_date) - Date.parse(b.release_date))
                }).map(c => <tr><td>{c.title}</td><td>({c.release_date})</td></tr>)}
            </table>
        </div>
    )
}