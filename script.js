let generatedCode = '';
let attempts = 0;
let startTime;

function generateCode() {
    let code = '';
    for (let i = 0; i < 6; i++) {
        const randomCharCode = Math.floor(Math.random() * 128); // Génère un code ASCII entre 0 et 127
        code += String.fromCharCode(randomCharCode); // Convertit le code ASCII en caractère
    }
    return code;
}

function displayCode() {
    generatedCode = generateCode();
    document.getElementById('code').textContent = generatedCode;
}

document.getElementById('submit').addEventListener('click', () => {
    const inputCode = document.getElementById('input-code').value;
    attempts++;

    if (inputCode === '') {
        document.getElementById('message').textContent = 'Veuillez entrer un code.';
        document.getElementById('message').style.color = 'red'; // Rouge pour l'erreur
        return;
    }

    if (inputCode === generatedCode) {
        const timeTaken = ((new Date()) - startTime) / 1000; // Temps en secondes
        document.getElementById('stats').textContent = `Code trouvé ! Nombre de tentatives : ${attempts}, Temps écoulé : ${timeTaken.toFixed(2)} secondes.`;
        document.getElementById('message').textContent = 'Code trouvé !'; // Affiche "Code trouvé !"
        document.getElementById('message').style.color = 'green'; // Vert pour succès
    } else {
        document.getElementById('message').textContent = 'Code incorrect, réessayez.';
        document.getElementById('message').style.color = 'red'; // Rouge pour l'erreur
    }
});

function startGame() {
    displayCode();
    attempts = 0;
    startTime = new Date();
}

startGame();
