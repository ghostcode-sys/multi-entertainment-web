import React from 'react'

function VideoCard() {
    return (
        <div className="card" >

        <div className="card_content">
        <video width="320" height="240" controls autoplay muted>
        <source src="movie.mp4" type="video/mp4"/> 
        <source src="movie.ogg" type="video/ogg"/>
      Your browser does not support the video tag.
      </video>
            <h3>Some info</h3>
            <br />
            <p>lorem</p>
        </div>
        <div className="card_bottom">
            <div>
            <span className="article_card"></span>
            <span className="time_card"></span>
            </div>
            <div>
            <span className="heart_card" ><i className="fas fa-heart"></i></span>
            <span className="share_card"><i className="fas fa-share-alt" style={{ color: "deepskyblue" }}></i></span>
            <span className="info_card"><i className="fas fa-info-circle"></i></span>
            <span className="info_card"><i className="fas fa-keyboard"></i></span>
        </div></div>
    </div>
    )
}

export default VideoCard
