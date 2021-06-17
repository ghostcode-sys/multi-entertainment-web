import React from 'react'
import ChatBox from "./ChatBox"

const ChatHead = () => {
    return (
        <div>
            <h1 className="news_head">CHAT(s)</h1>
            <div className="mainbox">
                < ChatBox />
                <div className="msgup">
                    <div className="msgcomp">
                        <textarea name="msgs" id="msgs" cols="30" rows="3"></textarea>
                        <button className="sharebtn"><i class="fas fa-share-square"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatHead
