import React from "react";
import '../styles/header.css'

function Header(){
    return(
        <header>
            <div className="box">
                <h1 className="title display-1">Hoopoe</h1>
                <h2 className="text">The bird of beauty</h2>
                <p className="paragrahp">In his famous epic The Conference of the Birds,
                    Sufi poet Farid ud-Din Attar casts the hoopoe as the leader of all birds 
                    and the storyteller on the flock’s quest for enlightenment.
                </p>          
            </div>
        </header>
    )
}

export default Header