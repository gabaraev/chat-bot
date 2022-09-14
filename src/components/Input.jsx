import { useState } from "react";

export default function Input() {
    const [input, setInput] = useState(null);

    return (
        <div className="message-input-wrapper">
            <textarea
                className="message-input"
                // onChange={() => {
                //     setInput(target.value)
                //     console.log(input)}}
                type='text' 
                placeholder="Начните писать сообщение..."
            />
            <img src='icons/Sendstrelka.svg' />
        </div>
    )
}