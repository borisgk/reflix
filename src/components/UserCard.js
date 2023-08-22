// A card representing a single user

import React from "react"
import * as Constants from "../Settings"
import { Link } from "react-router-dom"

export default function UserCard({user, setUser}) {

    const userProfileLink = "/users/" + user.id
    const userMoviesLink = "/catalog/"

    return(
        <div className="usercard">
            <Link to={userMoviesLink} onClick={() => setUser(user.id)}>
                <img className="userimage" src={user.image}></img>
            </Link>
            <div className="username">{user.name}</div>
            <Link className="usernote" to={userProfileLink}>Who is this?</Link>
        </div>
    )
}