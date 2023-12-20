// Buat WebSocket objek
const socket = new WebSocket('ws://your-server-url');

// Dapatkan elemen-elemen HTML
const chatOutput = document.getElementById('chat-output');
const messageInput = document.getElementById('message-input');

// Event listener untuk pesan dari server
socket.addEventListener('message', function (event) {
    const message = event.data;
    displayMessage(message);
});

// Fungsi untuk menampilkan pesan di chat output
function displayMessage(message) {
    chatOutput.innerHTML += `<p>${message}</p>`;
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll ke bawah
}

// Fungsi untuk mengirim pesan ke server
function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.send(message);
        displayMessage(`You: ${message}`);
        messageInput.value = '';
    }
}