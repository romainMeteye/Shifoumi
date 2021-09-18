alert("Bonjour, vous allez jouer au jeu du Shifoumi !");
// Nom du Joueur
var userName = "";
enterName();
// Initialisation
var scoreUser = 0;
var scoreCpu = 0;
var userChoiceMin = "";
var objective = 0;
// Début du jeu
play();

function play() {
    while(objective === 0) {
        enterChoice();
        // Choix de l'ordinateur
        var cpuChoice = randomChoice(3);
        if(cpuChoice === 0) {
            cpuChoice = "pierre";
        }
        else if(cpuChoice === 1) {
            cpuChoice = "feuille";
        }
        else {
            cpuChoice = "ciseaux";
        };
        alert("l'ordinateur choisi " + cpuChoice + " !"); 
        alert("Et le gagnant est ...");
        // Compare les résultats
        if(userChoiceMin === cpuChoice) {
            alert("Egalité !");
        }
        else if(
            userChoiceMin === "pierre" && cpuChoice === "ciseaux"
            || userChoiceMin === "feuille" && cpuChoice === "pierre"
            || userChoiceMin === "ciseaux" && cpuChoice === "feuille") {
                alert(userName + " Gagne !");
                scoreUser++;
        }
        else {
            alert("L'ordinateur Gagne !");
            scoreCpu++;
        }
        alert(userName + " : " + scoreUser + "\n" + "Ordinateur" + " : " + scoreCpu);
        if(scoreUser === 3) {
            objective++;
        }
        else if(scoreCpu === 3) {
            objective++;
        }
        else {
            alert("Nouvelle Manche !");
        }
    };
    confirm("Merci d'avoir jouer, Voulez vous rejouer ?")
    scoreUser = 0;
    scoreCpu = 0;
    alert("Et c'est reparti !")
    play();
};

function randomChoice(numberOfChoice) {
return Math.floor(Math.random() * numberOfChoice);
};

function enterName() {
    userName = prompt("rentrez votre nom :");
    if(userName.length >= 2 && userName.length <= 20) {
         alert("Merci " + userName + " Préparez vous !");
        }
        else {
            enterName();
        }
};

function enterChoice() {
    var userChoice = prompt("Choisissez Pierre, Feuille ou Ciseaux :");
    userChoiceMin = userChoice.toLowerCase();
    if(userChoiceMin === "pierre" || userChoiceMin === "feuille" || userChoiceMin === "ciseaux") {
        alert("L'ordinateur fait son choix...");
        }
        else {
            enterChoice();
        }
};