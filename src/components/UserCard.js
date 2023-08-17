// A card representing a single user

import React from "react"
import * as Constants from "../Settings"

export default function UserCard({user}) {


    return(
        <div className="usercard">
            <img className="userimage" src={user.image}></img>
            <div className="username">{user.name}</div>
            <div className="usernote"><a href="/">Who is this?</a></div>
        </div>
    )
}