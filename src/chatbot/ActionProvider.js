// ActionProvider starter code
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    helloWorldHandler() {
        const message = this.createChatBotMessage('Hello. Nice to meet you.');

        this.setChatbotMessage(message)
    }

    todosHandler = () => {
        const message = this.createChatBotMessage("sure. Here's your todos", {
            widget: 'todos'
        });
        this.setChatbotMessage(message)
    }

    setChatbotMessage(message) {
        // const message = this.createChatBotmessage('Hello. Nice to meet you.');

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}

export default ActionProvider;