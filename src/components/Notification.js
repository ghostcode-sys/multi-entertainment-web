import React from 'react'
import user from "../images/user.png"

const Notification = () => {
    return (
        <div className="nt">
            <div className="nt_time">2 days ago </div>
            <div className="nt_title">Title</div>
            <div className="nt_info">
                <span className="nt_icon"><img src={user} alt = "Here is user logo"/></span>
                <span className="nt_detail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quibusdam, officia
                    eum et ab ducimus molestiae illo ut porro eos incidunt id, iste repudiandae libero! Nemo eum ut ea
                    deserunt.</span>
            </div>
        </div>
    )
}

export default Notification
