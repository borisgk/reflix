// Landing page with header and user list

import React, {useState} from "react"
import Header from "./Header"
import UserCard from "./UserCard"
import * as Constants from "../Settings"

export default function Landing() {

    console.log(Constants.USERS)

    return (
        <div>
            <Header navItems={Constants.NAV_ITEMS}/>
            <div className="userlist">
                {Constants.USERS.map(u => <UserCard user = {u} />)}
            </div>
        </div>
    )

}
               
