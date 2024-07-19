document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        sendMessage();
    });

    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        let message = userInput.value.trim();
        if (message !== '') {
            appendMessage('user', message);
            userInput.value = '';
            // Simulate bot response after a short delay
            setTimeout(function() {
                botResponse();
            }, 500);
        }
    }

    function botResponse() {
        let responses = [
            "Hello! How can I help you?",
            "What can I assist you with today?",
            "Feel free to ask me anything."
        ];
        let randomIndex = Math.floor(Math.random() * responses.length);
        let response = responses[randomIndex];
        appendMessage('bot', response);
    }

    function appendMessage(sender, message) {
        let className = (sender === 'user') ? 'user-message' : 'bot-message';
        let messageElement = document.createElement('div');
        messageElement.classList.add(className);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
});
