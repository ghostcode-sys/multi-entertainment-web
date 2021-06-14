import React from 'react'

const Header = () => {
    return (
        <nav>
            <ul className="links">
                <li className="anchors"><i className="fas fa-home"></i></li>
                <li className="anchors"><i className='fas fa-film'></i> </li>
                <li className="anchors"><i className="fas fa-users"></i></li>
                <li className="anchors"><i className="fas fa-comments-dollar"></i></li>
                <li className="anchors"><i className="fas fa-bell"></i></li>
                <li className="anchors"><i className="fas fa-bars"></i></li>
            </ul>
        </nav>
    )
}

export default Header
