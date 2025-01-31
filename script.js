const shayaris = [
    "Dil ki baat apse kehna chahta hoon, Kya aap meri zindagi mein shaamil hona chahti ho?",
    "Tumhe dekhne ka ek alag hi mazaa hai, Kya tum mere saath zindagi ka safar tay karogi?",
    "Har pal tumhara intezaar karta hoon, Kya tum mere saath apna jeevan bitana chahti ho?"
];

let currentShayariIndex = 0;

document.getElementById("next-btn").addEventListener("click", function() {
    if (currentShayariIndex < shayaris.length - 1) {
        currentShayariIndex++;
        document.getElementById("shayari").innerText = shayaris[currentShayariIndex];
    } else {
        document.getElementById("shayari-box").style.display = "none";
        document.getElementById("proposal-box").style.display = "block";
    }
});

document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("response-text").innerText = "Thank you for saying Yes! 💖";
    document.getElementById("response-box").style.display = "block";
    document.getElementById("proposal-box").style.display = "none";
    playAudio("yes.mp3");
});

document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("response-text").innerText = "You are my first love... 💔";
    document.getElementById("response-box").style.display = "block";
    document.getElementById("proposal-box").style.display = "none";
    playAudio("no.mp3");
});

function playAudio(audioFile) {
    let audio = new Audio(audioFile);
    audio.play();
}
