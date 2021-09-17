alert("Bonjour, vous allez jouer au jeu du Shifoumi !");
// Nom du Joueur
enterName();
var scoreUser = 0;
var scoreCpu = 0;
// Début du jeu
while(scoreUser < 3 || scoreCpu < 3) {
     var userChoice = prompt("Choisissez Pierre, Feuille ou Ciseau :");
     var userChoiceMin = userChoice.toLowerCase();
     // Choix de l'ordinateur
     alert("L'ordinateur fait son choix...");
     var cpuChoice = randomChoice(3);
     if(cpuChoice === 0) {
             cpuChoice = "pierre";
            }
            else if(cpuChoice === 1) {
                cpuChoice = "feuille";
            }
            else {
                cpuChoice = "ciseau";
            };
            alert("l'ordinateur choisi " + cpuChoice + " !"); 
            alert("Et le gagnant est ...");
            // Compare les résultats
            if(userChoiceMin === cpuChoice) {
                alert("Egalité !");
            }
            else if(
                userChoiceMin === "pierre" && cpuChoice === "ciseau"
                || userChoiceMin === "feuille" && cpuChoice === "pierre"
                || userChoiceMin === "ciseau" && cpuChoice === "feuille") {
                    alert(userName + " Gagne !");
                    scoreUser++;
                }
                else {
                    alert("L'ordinateur Gagne !");
                    scoreCpu++;
                }
            };
function randomChoice(numberOfChoice) {
return Math.floor(Math.random() * numberOfChoice);
};
function enterName() {
    var userName = prompt("rentrez votre nom :");
    if(userName.length >= 2 && userName.length <= 20) {
         alert("Merci " + userName + " Préparez vous !");
        }
        else {
            enterName();
        }
};