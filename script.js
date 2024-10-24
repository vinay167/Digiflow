const responses = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hi there! How can I help you today?",
    "how are you?": "I'm just a program, but thanks for asking! How about you?",
    "how are you": "I'm just a program, but thanks for asking! How about you?",
    "what is your name?": "I'm your chat assistant!",
    "help": "Sure! What do you need help with?",
    "i need your help":"Sure! What do you need help with?",
    "i want to schedule a call": "Sure can you tell us your preferred timings",
    "heyy i am vinay":"ohh sir plese let client some fun",
    "sandeep is also here": "Ohh ask him next time when he will come to office",
    // Add more question-response pairs as needed
};

document.getElementById("send-button").addEventListener("click", function() {
    const input = document.getElementById("message-input");
    const messageText = input.value.trim().toLowerCase(); // Convert to lower case for matching

    if (messageText) {
        // Display the user's message
        addMessage(messageText, 'user');

        // Clear input
        input.value = '';
        input.focus();

        // Get the bot's response based on user input
        const replyText = responses[messageText] || "I'm sorry, I don't understand that.";
        addMessage(replyText, 'bot');
    }
});

// Function to add a message to the chatbox
function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.textContent = text;
    messageElement.className = sender; // 'user' or 'bot'
    document.getElementById("chatbox-body").appendChild(messageElement);
}
