import InputBar from "./InputBar.tsx";
import UserText from "./UserText.tsx";
import ChatbotResponse from "./ChatbotResponse.tsx"
export default function MainFeed(props) 
{
    return(
        <div className="main-feed">
            <UserText text={"writing test 1"} />
            <ChatbotResponse text={"ggson 1"} />
            
            <UserText text={"this is just showing that the css isnt going to break when using it at the start"} />
            <ChatbotResponse text={"Yeah it seems to be owkring alright for now, lets hope it remains working and does not cause any errors in the future. That being said, lets see what heppens when the text that is written is longer than one line..."} />
            <UserText text={"thats cool"} />
            <ChatbotResponse text={"yeah"} />
            <UserText text={"so, do we just keep talking?"} />
            <ChatbotResponse text={"nah im good"} />
            <UserText text={"so, do we just keep talking?"} />
            <ChatbotResponse text={"djjsdhnfnskfjndkjfnsdkjnfkjnsdjfjksdnj"} />
        </div>
    )
}