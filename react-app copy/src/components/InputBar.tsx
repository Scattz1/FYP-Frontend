export default function InputBar(props) {
    return (
        <div className="input-bar">
            <div className="input-bar-border">
                <textarea id="input-bar-user-input" placeholder="Type your message here..."></textarea>
                <button id="send-button" className="main_blue_background"><i className="fa-regular fa-paper-plane"></i>
                </button>
            </div>
        </div>
    )

}