export default function ChatbotResponse(props)
{
    return(
        <div className="ChatTextContainer">
            <p className="ChatText" >
                <i className="fa-regular fa-comments chat_icon"></i>
                {props.text}
            </p>
        </div>
    )
}