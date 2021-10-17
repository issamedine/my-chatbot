import React from 'react'
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import FlightBotAvatar from '../components/botAvatar/FlightBotAvatar'
import Todos from '../components/Todos/Todos.jsx'

const config = {
    initialMessages: [createChatBotMessage(`Hello world`)],
    botName: "CrazyBot",
    customComponents: {
        botAvatar: (props) => < FlightBotAvatar {...props} />,
    },
    // Defines an object of custom styles if you want to override styles
    customStyles: {
        // Overrides the chatbot message styles
        botMessageBox: {
            backgroundColor: "purple",
        },
        // Overrides the chat button styles
        chatButton: {
            backgroundColor: "purple",
        },
    },
    state: {
        todos: []
    },
    widgets: [
        {
            widgetName: "todos",
            widgetFunc: (props) => <Todos {...props} />,
            mapStateToProps: ["todos"],
        }
    ]
}

export default config