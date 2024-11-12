const responses = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hi there! How can I help you today?",
    "how are you?": "I'm just a program, but thanks for asking! How about you?",
    "how are you": "I'm just a program, but thanks for asking! How about you?",
    "what is your name?": "I'm your chat assistant!",
    "help": "Sure! What do you need help with?",
    "i need your help": "Sure! What do you need help with?",
    "i want to schedule a call": "Sure, can you tell us your preferred timings?",
    "heyy i am vinay": "Ohh sir, please let client have some fun.",
    "sandeep is also here": "Ohh, ask him next time when he will come to the office",
};

let initialMessageShown = false; // Flag to track if the initial message has been shown

function showInitialMessage() {
    if (!initialMessageShown) {
        addMessage("How can I help you?", 'bot');
        initialMessageShown = true; // Set the flag to true after showing the message
    }
}

document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("message-input").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById("message-input");
    const messageText = input.value.trim().toLowerCase();

    if (messageText) {
        addMessage(messageText, 'user');
        input.value = '';
        input.focus();

        const replyText = responses[messageText] || "I'm sorry, I don't understand that.";
        addMessage(replyText, 'bot');

        // Scroll to the bottom of the chatbox after adding messages
        scrollToBottom();
    }
}

function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.textContent = text;
    messageElement.className = sender; 
    document.getElementById("chatbox-body").appendChild(messageElement);
}

function scrollToBottom() {
    const chatboxBody = document.getElementById('chatbox-body');
    chatboxBody.scrollTop = chatboxBody.scrollHeight; // Scroll to the bottom
}

document.getElementById("chat-button").addEventListener("click", function() {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.classList.toggle("active");
    if (chatContainer.classList.contains("active")) {
        showInitialMessage(); // Show initial message when chat opens
    }
});
