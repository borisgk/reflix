// Landing page with header and user list

import React, {useState} from "react"
import Header from "./Header"
import UserCard from "./UserCard"
import * as Constants from "../Settings"

export default function Landing({users, setUser}) {

    return (
        <div>
            <div className="userlist">
                {users.map(u => <UserCard user = {u} setUser = {setUser} />)}
            </div>
        </div>
    )

}
               
