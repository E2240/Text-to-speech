// script.js

// Check if browser supports Web Speech API
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US'; // Set language
    recognition.continuous = false; // Stop after one utterance
    recognition.interimResults = false; // Show final results only

    const startBtn = document.getElementById('start-btn');
    const output = document.getElementById('output');
    const instructions = document.getElementById('instructions');

    // Start speech recognition
    startBtn.addEventListener('click', () => {
        recognition.start();
        instructions.textContent = "Listening... Speak now!";
    });

    // Capture speech result
    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        output.value += speechResult + '\n'; // Append result to textarea
        instructions.textContent = "Speech recognized! Click to speak again.";
    };

    // Handle errors
    recognition.onerror = (event) => {
        instructions.textContent = `Error occurred: ${event.error}`;
    };

    // End recognition
    recognition.onend = () => {
        instructions.textContent = "Click the button and start speaking.";
    };
} else {
    alert("Web Speech API is not supported in your browser. Please use Google Chrome.");
}
