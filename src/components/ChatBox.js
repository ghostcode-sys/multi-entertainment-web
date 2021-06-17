import React from 'react'
import user from "../images/user.png"

const ChatBox = () => {
    return (
        <>
            <div className="userinfo">
                <img src={user} alt=" user" />
                <span className="user_name">FirstName</span>
                <span className="user_id">name.xyz.com</span>
            </div>
            <hr></hr>
            <div className="chatbox">
                <div className="msgbox send recieve">
                    <div ></div>
                    <div className="chat_swipe">
                        <p>This is text that is used for response text </p>
                    </div>
                    <div className="main_message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, amet harum
                        expedita consequatur nobis, dolor impedit similique tempora omnis alias totam veritatis velit
                        aliquid dolorem ad ducimus id nemo consequuntur!</div>
                </div>
                <div className="msgbox">
                    <div className="chat_swipe">
                        <span style={{ float: "right" }}><button style={{backgroundColor:"transparent", border:"none"}}><i class="far fa-times-circle"></i></button></span>
                        <p>This is text that is used for response text </p>
                    </div>
                    <div className="main_message">
                        <span style={{ float: "right" }}><button style={{backgroundColor:"transparent",border:"none"}}><i class="fas fa-ellipsis-v"></i></button></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, amet harum
                        expedita consequatur nobis, dolor impedit similique tempora omnis alias totam veritatis velit
                        aliquid dolorem ad ducimus id nemo consequuntur!</div>
                </div>
            </div>
        </>
    )
}

export default ChatBox
