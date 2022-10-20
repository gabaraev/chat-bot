import Linkify from 'react-linkify'
import mMessage from "../models/mMessage"


interface MessageProps {
    message: mMessage;
}

export default function Message({message}: MessageProps) {
    const messageContent = message.content.split('\n').map((item, id) => <span key={id}>{item}<br/></span>)
    return (
        <div className={'message message-from-' + message.user}>
            <Linkify><p className={message.user + '-message-content'}>{messageContent}</p></Linkify>
        </div>
    )
}