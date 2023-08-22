import React from "react"

export default function SearchBar({searchFun, user}) {
    
    function doSearch(event) {
        let query = event.target.value
        searchFun(query)
    }


    return (
        <div className="searchbar">

            <input className="searchbox" type="text" placeholder="Find a movie for tonight!" onChange={doSearch}></input>

            {user ? <div className="budget">{10 - 2 * user.rentals.length + ".00"} USD</div> : null}

        </div>
    )

}