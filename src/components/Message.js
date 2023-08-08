import React, { useEffect } from "react";

const Message = ({ messageText, removeMessage }) => {
    useEffect(() => {
        const messageTimer = setTimeout(() => {
            removeMessage();
        }, 2000);
        window.setTimeout(messageTimer);

        return () => window.clearTimeout(messageTimer);
    });

    return (
        <div className="message">
            <p>{messageText}</p>
            <span className="close-message" onClick={removeMessage}>X</span>
        </div>
    );
};

export default Message;