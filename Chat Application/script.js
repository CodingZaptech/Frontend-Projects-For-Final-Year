const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => { if(e.key==="Enter") sendMessage(); });

function sendMessage() {
    const msg = messageInput.value.trim();
    if(msg==="") return;
    const p = document.createElement('p');
    p.textContent = msg;
    p.classList.add('message');
    chatBox.appendChild(p);
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
