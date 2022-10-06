import mMessage from "../models/mMessage"


interface MessageProps {
    message: mMessage;
}

export default function Message({message}: MessageProps) {

    return (
        <div className={'message message-from-' + message.user}>
            <p className={message.user + '-message-content'}>{message.content}</p>
        </div>
    )
}