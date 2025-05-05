import { useState } from 'react';
export default function InputBar(props) {

    const [inputValue, setInputValue] = useState('');
    function validateInputData() {
        console.log(inputValue);
    }
    
    return (
        <div className="input-bar">
            <div className="input-bar-border">
                <textarea id="input-bar-user-input" placeholder="Type your message here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
                <button id="send-button" className="main_blue_background" onClick={validateInputData}><i className="fa-regular fa-paper-plane"></i>
                </button>
            </div>
        </div>
    )

}