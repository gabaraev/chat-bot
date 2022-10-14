import mMessage from "../models/mMessage"


interface MessageProps {
    message: mMessage;
}

export default function Message({message}: MessageProps) {
    const messageContent = message.content.split('\n').map((item, id) => <span key={id}>{item}<br/></span>)
    return (
        <div className={'message message-from-' + message.user}>
            <p className={message.user + '-message-content'}>{messageContent}</p>
        </div>
    )
}