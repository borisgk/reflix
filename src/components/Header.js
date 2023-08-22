// Header component with top navigation and logo

import React from "react"
import { Link } from "react-router-dom"

export default function Header ({navItems, resetUser}) {

    return(
        <div className="header">
            <div>
                <Link className="menuitem" to="/">Home</Link>
                <Link className="menuitem" to="/catalog" onClick={() => resetUser()}>Catalog</Link>
            </div>
            <img className="logo" src="/reflix.png"></img>
        </div>
    )

}