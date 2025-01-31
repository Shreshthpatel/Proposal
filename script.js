const text = "I just want to say...\nYou are the most amazing person I’ve ever met.💖";
let i = 0;
let speed = 50;  // Speed of text animation

function typeWriter() {
    if (i < text.length) {
        document.getElementById("loveText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function showProposal() {
    document.getElementById("proposalText").classList.remove("hidden");
    document.getElementById("yesBtn").classList.remove("hidden");
    document.getElementById("noBtn").classList.remove("hidden");
}

async function saveResponse(response) {
    await fetch("/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: response })
    });

    document.getElementById("proposalText").innerText = "Thank you for your response! ❤️";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";
}

// Start the text animation when the page loads
window.onload = typeWriter;
