document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');

    // Function to add a new message to the chat box
    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.textContent = content;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    // Handle form submission
    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const messageContent = messageInput.value.trim();
        if (messageContent) {
            // Add sent message
            addMessage(messageContent, 'sent');

            // Clear the input
            messageInput.value = '';

            // Simulate receiving a response after 1 second
            setTimeout(() => {
                addMessage('This is a simulated response.', 'received');
            }, 1000);
        }
    });
});
