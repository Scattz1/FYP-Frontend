import * as timers from "node:timers";

export default function UserText(props)
{
    const now = new Date();
    const hours = now.getHours();
    var minutes = now.getMinutes();
    var time;
    if(minutes < 9)
    {
        time = `You: ${hours}:0${minutes}`;
    }
    else
    {
        time = `You: ${hours}:${minutes}`;
    }
    
    
    return(
        <div className="UserTextContainer">
            <p className="UserTextTime">{time}</p>
            <p className="UserText" >{props.text}</p>
        </div>
    )
}