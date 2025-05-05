import UserText from "./UserText.tsx";
import ChatbotResponse from "./ChatbotResponse.tsx";
import { useState, useEffect, useRef  } from "react";

export default function MainFeed(props) {
    
    //CHATBOT RESPONSES
    const ChatBotMessages = ["Hi there, im glad to help",
        "womp womp",
        "ggson1",
        "ggson2",
        "long message dsdsdasnj dnjsanjndjs anijdnsaindj nasjdjasndijnasij dnijasnjidnsaijndjnasij dijnasijdajsdiosaj doisjodsajoidjoi sajdoijsoda fdsfsar sadasd asdsa asdsad asdsafsaf asdasfsagf asgsagasas agsagasg asgasgasgas asg asgasg asfas"];
    const ChatBotMessageIndex = useRef(0);
    
    
    const [messages, setMessages] = useState([
        [0, "How may I assist you today?"]
    ]);
    const [inputValue, setInputValue] = useState('');
    
    const renderMessage = (msg, index) => {
        if (msg[0] === 0) {
            return <ChatbotResponse key={index} text={msg[1]} />;
        } else {
            return <UserText key={index} text={msg[1]} />;
        }
        
    };

    function addToList(target, text) {
        setMessages(prev => [...prev, [target, text]]);
    }

    function validateInputData() {
        if (inputValue.trim() !== "") {
            addToList(1, inputValue.trim());
            setInputValue(""); //just reseting input val to default again so i can show placeholder again
        }
    }

    //CHATBOT SIMULATION FOR REPRESENTING FUNCTIONALITY


    useEffect(() => {
        const lastMsg = messages[messages.length - 1];

        let num = Math.floor(Math.random() * 5) + 1;
        
        num *= 1000 //im scaling it to match the milliseconds 
        document.getElementById("loading_animation").style.display = "none";
        if (lastMsg[0] === 1) 
        {
            // slight delay to mimic response time
            document.getElementById("loading_animation").style.display = "block";
            setTimeout(() => {
                addToList(0, ChatBotMessages[ChatBotMessageIndex.current]);
                
                ChatBotMessageIndex.current += 1;
                
                if(ChatBotMessageIndex.current > ChatBotMessages.length - 1)
                {
                    ChatBotMessageIndex.current = 0; //just for testing il make it cyclical
                }
            }, num);
        }
        
    }, [messages]);
    
    
    
    return (
        <>
            <div className="main-feed">
                {messages.map((msg, index) => renderMessage(msg, index))}
                {/*animation for the loading below*/}
                <span className="dots" id="loading_animation"><span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span> 
            </div>

            <div className="input-bar">
                <div className="input-bar-border">
                    <textarea id="input-bar-user-input" placeholder="Ask me anything" value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                    ></textarea>
                    <button id="send-button" className="main_blue_background" onClick={validateInputData}>
                        <i className="fa-regular fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
