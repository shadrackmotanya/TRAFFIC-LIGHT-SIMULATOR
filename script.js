let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let statusText = document.getElementById("status");

let interval;
let isRunning = false;

function resetLights() {
    red.style.background = "grey";
    yellow.style.background = "grey";
    green.style.background = "grey";
}

function showRed() {
    resetLights();
    red.style.background = "red";
    statusText.textContent = "🚗 STOP! Even the pedestrians are judging you.";
}

function showYellow() {
    resetLights();
    yellow.style.background = "yellow";
    statusText.textContent = "⚠️ WAIT... the system is thinking like a confused student before an exam.";
}

function showGreen() {
    resetLights();
    green.style.background = "green";
    statusText.textContent = "🚀 GO! But don’t act like you’re in a Fast & Furious movie 😄";
}

// main cycle
function startTraffic() {
    if (isRunning) return;
    isRunning = true;

    showRed();

    interval = setInterval(() => {
        if (red.style.background === "red") {
            showGreen();
        } else if (green.style.background === "green") {
            showYellow();
        } else {
            showRed();
        }
    }, 3000);
}

function stopTraffic() {
    clearInterval(interval);
    isRunning = false;
    resetLights();
    statusText.textContent = "🛑 Traffic system stopped. Chaos mode unlocked.";
}