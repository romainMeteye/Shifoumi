alert("Bonjour, vous allez jouer au jeu du Shifoumi !");
// Nom du Joueur
var userName = prompt("rentrer votre nom :");
alert("Merci " + userName + " Préparez vous !");
var userChoice = prompt("Choisissez Pierre, Feuille ou Ciseau :");
// Choix de l'ordinateur
alert("L'ordinateur fait son choix...");
var cpuChoice = randomChoice(3);
if(cpuChoice === 0) {
    cpuChoice = "Pierre";
}
else if(cpuChoice === 1) {
    cpuChoice = "Feuille";
}
else {
    cpuChoice = "Ciseau";
};
alert("l'ordinateur Choisi " + cpuChoice + " !"); 
alert("Et le gagnant est ...");
// Compare les résultats
if(userChoice === cpuChoice) {
    alert("Egalité !");
}
else if(
    userChoice === "Pierre" && cpuChoice === "Ciseau"
    || userChoice === "Feuille" && cpuChoice === "Pierre"
    || userChoice === "Ciseau" && cpuChoice === "Feuille") {
        alert(userName + " Gagne !");
    }
    else {
        alert("L'ordinateur Gagne !");
    };