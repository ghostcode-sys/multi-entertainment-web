import React from 'react'

const ChatBox = () => {
    return (
         <div className="chatbox send ">
            <div className="chat_swipe dT">
                <div className="chat_del">
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className="chat_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita possimus
                provident obcaecati fugiat ipsa inventore veniam in earum dolorem pariatur tempore dicta ea reiciendis, eum,
                voluptas animi et quae!</div>
            <div className="chat_conf ">
                <span className="chat_time"> 1 day ago</span>
                <span className="chat_st"><i className="far fa-eye"></i>
                    {/* <!-- <i className="far fa-eye-slash"></i> --> */}
                </span>
            </div>
        </div>
    )
}

export default ChatBox
