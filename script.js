let generatedCode = '';
let attempts = 0;
let startTime;

function generateCode(length) {
    let code = '';
    for (let i = 0; i < length; i++) {
        const randomCharCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32; // Génère un code ASCII entre 32 et 126
        code += String.fromCharCode(randomCharCode); // Convertit le code ASCII en caractère
    }
    return code;
}

function displayCode() {
    const length = document.getElementById('length-slider').value; // Utiliser le slider
    generatedCode = generateCode(length);
    document.getElementById('code').textContent = generatedCode;
}

document.getElementById('submit').addEventListener('click', () => {
    const inputCode = document.getElementById('input-code').value;
    attempts++;

    if (inputCode === '') {
        document.getElementById('message').textContent = 'Veuillez entrer un code.';
        document.getElementById('message').style.color = 'red';
        return;
    }

    if (inputCode === generatedCode) {
        const timeTaken = ((new Date()) - startTime) / 1000; // Temps en secondes
        document.getElementById('stats').textContent = `Code trouvé ! Nombre de tentatives : ${attempts}, Temps écoulé : ${timeTaken.toFixed(2)} secondes.`;
        document.getElementById('message').textContent = 'Code trouvé !';
        document.getElementById('message').style.color = 'green';

        // Réinitialiser le nombre de tentatives et le temps
        attempts = 0;
        startTime = new Date();
        displayCode(); // Afficher un nouveau code
    } else {
        document.getElementById('message').textContent = 'Code incorrect, réessayez.';
        document.getElementById('message').style.color = 'red';
    }
});

function startGame() {
    displayCode();
    attempts = 0;
    startTime = new Date();
}

document.getElementById('length-slider').addEventListener('input', (event) => {
    const length = event.target.value;
    document.getElementById('length-display').textContent = length;
    displayCode();
});

// Démarrer le jeu au chargement de la page
startGame();
