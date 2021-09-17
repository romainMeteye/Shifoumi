alert("Bonjour, vous allez jouer au jeu du Shifoumi !");
var userName = prompt("rentrer votre nom :");
alert("Merci " + userName + " Préparez vous !");
var userChoice = prompt("Choisissez Pierre, Feuille ou Ciseau");
alert("L'ordinateur fait son choix");
var userChoice = randomChoice(3);
if(userChoice === 0) {
    userChoice = "Pierre";
}
else if(userChoice === 1) {
    userChoice = "Feuille";
}
else {
    userChoice = "Ciseau";
};
console.log(userChoice);
