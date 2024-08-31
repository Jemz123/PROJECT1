document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username-input');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesDiv = document.getElementById('messages');

    const socket = io();

    socket.on('receive_message', (data) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', data.sender);
        const messageContentDiv = document.createElement('div');
        messageContentDiv.classList.add('message-content');
        messageContentDiv.textContent = `${data.message} - ${data.timestamp}`;
        messageDiv.appendChild(messageContentDiv);
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });

    sendButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();
        if (username && message) {
            const timestamp = new Date().toLocaleTimeString();
            socket.emit('send_message', { message, sender: username, timestamp });
            messageInput.value = '';
        }
    });
});
