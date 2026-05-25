const API_URL = "http://127.0.0.1:8000/chat_app/";

async function loadMessages() {
  const response = await fetch(API_URL);
  const data = await response.json();
  const container = document.getElementById("chat-container");
  container.innerHTML = "";
  data.forEach((chat) => {
    container.innerHTML += `
            <div class="chat">
                <strong>${chat.name}</strong><br>
                ${chat.message}<br>
                <small>${chat.created_at}</small>
            </div>
        `;
  });
}

async function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      message,
    }),
  });
  loadMessages();
}

loadMessages();
