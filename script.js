// Telegram Bot Token and User ID
const telegramBotToken = "7525636245:AAFREdzKN2Ad5OaMsgNY0QBT34rGM570C4Q"; // From BotFather
const userId = "6192222544"; // Your Telegram user ID

// Function to send message to your Telegram
function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const data = {
        chat_id: userId, // The user ID to send the message to
        text: message, // The message text
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
    })
    .catch((error) => {
        console.error('Error sending message:', error);
    });
}

// Shayari and proposal logic
let shayariIndex = 0;
const shayaris = [
    "Pehli baar jab tumhe dekha tha, dil mein kuch ho gaya tha...",
    "Tum meri zindagi ki sabse khoobsurat kahani ho...",
    "Meri duaon ka jawab tum ho, meri khushiyon ka sabab tum ho..."
];

// Show the first shayari
function showShayari() {
    document.getElementById('shayari-text').innerText = shayaris[shayariIndex];
}

// Move to next shayari or show proposal question
document.getElementById("next-btn").addEventListener("click", function() {
    shayariIndex++;
    if (shayariIndex < shayaris.length) {
        showShayari();
    } else {
        document.getElementById('shayari-box').style.display = "none";
        document.getElementById('proposal-box').style.display = "block";
        playAudio("shayari_one.mp3");
    }
});

// Handle Yes and No responses
document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("response-text").innerText = "Thank you for saying Yes! 💖";
    document.getElementById("response-box").style.display = "block";
    document.getElementById("proposal-box").style.display = "none";
    playAudio("yes.mp3");

    // Send Telegram message if Yes is clicked
    sendTelegramMessage("Someone said Yes to the proposal! 💖");
});

document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("response-text").innerText = "You are my first love... 💔";
    document.getElementById("response-box").style.display = "block";
    document.getElementById("proposal-box").style.display = "none";
    playAudio("no.mp3");

    // Send Telegram message if No is clicked
    sendTelegramMessage("Someone said No to the proposal... 💔");
});

// Play audio function
function playAudio(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
}

// Initial page load
window.onload = function() {
    showShayari();
};
