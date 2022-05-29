import { useState } from "react";

export default function Input() {
    const [input, setInput] = useState(null);

    return (
        <div className="message-input-wrapper">
            <input 
                className="message-input"
                // onChange={() => {
                //     setInput(target.value)
                //     console.log(input)}}
                type='text' 
                placeholder="Начните писать сообщение..."
            />
            <button>Отправить</button>
        </div>
    )
}