export default function Message({message}) {

    return (
        <div className={'message message-from-' + message.user}>
            <p className={message.user + '-message-content'}>{message.content}</p>
        </div>
    )
}