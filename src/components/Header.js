// Header component with top navigation and logo

import React from "react"

export default function Header ({navItems}) {

    return(
        <div className="header">
            <div><ul className="topmenu">
                {navItems.map(n => <li className="menuitem"><a href={n.link}>{n.label}</a></li>)}
            </ul></div>
            <img className="logo" src="reflix.png"></img>
        </div>
    )

}