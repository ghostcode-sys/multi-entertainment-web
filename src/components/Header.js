import React, { useState } from 'react'
import {Link} from "react-router-dom"
function Header() {
    const [userName,setuserName] = useState("Adobe")
    const [disp,setdisp] = useState("d-none")
    const show_down = (e) => {
        disp === "d-inline"?setdisp("d-none"):setdisp("d-inline")
    }
    const cls = 'Menu '+ disp;
    return (
    <nav>
        <i className="anchors">{userName}</i>
        <Link to="/"><i className = "fas fa-home anchors"/></Link>
        <Link to="/Video"><i className = 'fas fa-film anchors'/></Link> 
        <Link to="/Group"><i class="fas fa-user-friends anchors"></i></Link>
        <Link to="/Chat"><i className ="fas fa-comments-dollar anchors"/></Link>
        <Link to="/Notification"><i className ="fas fa-bell anchors"/></Link>
        <button onClick={show_down} className="Menuclick"><i className ="fas fa-bars anchors "/></button>
        <div className = {cls} >
            <li><button>Signup</button></li>
            <li><button>login</button></li>
            <li><button>Dasboard</button></li>
        </div>
    </nav>
    )
}

export default Header
