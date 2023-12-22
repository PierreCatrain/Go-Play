var auTourDesBlancs = false;
var pieceBlanche = "img/target.svg";
var pieceNoir = "img/target(1).svg";

var idAQuiLeTour = document.getElementById("idAQuiLeTour");
var passerSonTour = document.getElementById("passerSonTour");

var spanPointBlanc = document.getElementById("spanPointBlanc");
var spanPointNoir = document.getElementById("spanPointNoir");
var pointBlanc = 6.5;
var pointNoir = 0;

var lesPiecesQuiOntEteCapture = [];
var lesPiecesQuiOntEteCaptureA1 = [];
var lesPiecesQuiOntEteCaptureA2 = [];
var lesPiecesQuiOntEteCaptureA3 = [];
var lesPiecesQuiOntEteCaptureA4 = [];
var lesPiecesQuiOntEteCaptureE1 = [];
var lesPiecesQuiOntEteCaptureE2 = [];
var lesPiecesQuiOntEteCaptureE3 = [];
var lesPiecesQuiOntEteCaptureE4 = [];

var xLaNouvellePiece = "";
var yLaNouvellePiece = "";

var toutesLesPrecedentesPositions = [];

var combienDeTourPasserDaffiler = 0;

var tableauCasesVides = [];

var aQuiLePoint = "";
var groupeDeVide = [];
var grosGroupeDeVide = [];

var compterPointChaqueTour = true;

var yADeuxYeuxListeDePieceAuContactDesYeux = [];

var idJouer = document.getElementById("jouer");
var idMesParties = document.getElementById("mesParties");
var idProfil = document.getElementById("profil");
var idClassement = document.getElementById("classement");
var idReglages = document.getElementById("reglage");
var idZoneReglage = document.getElementById("zoneReglage")
var idPlus = document.getElementById("plus");
var idBarrePlus = document.getElementById("barrePlus");
var idRegles = document.getElementById("regles");
var idZoneRegles = document.getElementById("zoneRegles");
var idfinDeParti = document.getElementById("finDeParti");
var idcroixFinDeParti = document.getElementById("croixFinDeParti");
var idcouleurVainqueur = document.getElementById("couleurVainqueur");
var idh2Vainqueur = document.getElementById("h2Vainqueur");
var idspanPointNoirFinal = document.getElementById("spanPointNoirFinal");
var idspanPointBlancFinal = document.getElementById("spanPointBlancFinal");
var idh3Raison = document.getElementById("h3Raison");
var idrejouer = document.getElementById("rejouer");

var idabandon = document.getElementById("abandon");



/*
a faire


certaines capture et certain comptage de point
fonciton demarrer une partie
fonciton abandon
afficher resultat en fin de parti
afficher la derniere piece noir et blanche pose (nombre de pierre dessus ?)
animation plutot que message quand on peut pas
differente taille de plateau
horloge
previsulaiser la piece que l'on va poser (est ce qu'on previsualise quand on peut pas ?)
*/





//
// Code logique
//



// on recuperer les elements img html du plateau en deux dimensions
var plateau = [];
var tempoLignePlateau = [];
for(var i = 0; i < 19; i++){
    tempoLignePlateau = [];
    for(var j = 0; j < 19; j++){
        tempoLignePlateau.push(document.getElementById(i + "/" + j));
    }
    plateau.push(tempoLignePlateau);
}
// on recuperer les elements canvas html du plateau en deux dimensions
var plateauCanvas = [];
var tempoLignePlateauCanvas = [];
for(var i = 0; i < 19; i++){
    tempoLignePlateauCanvas = [];
    for(var j = 0; j < 19; j++){
        tempoLignePlateauCanvas.push(document.getElementById("canvas" + i + "/" + j));
    }
    plateauCanvas.push(tempoLignePlateauCanvas);
}
// on ajouter la possibilites de cliquer sur les elements html canvas et de les survoler
var tempo2 = [];
for(var x = 0; x < 19; x++){
    tempo2 = [];
    for(var y = 0; y < 19; y++){
        plateau[y][x].addEventListener("click", onJoueLeCoupFonction);
        plateauCanvas[y][x].addEventListener("mouseover", onPrevisualiseLeCoupFonction);
        plateau[y][x].addEventListener("mouseout", onNePrevisulisePlusFonciton);
    }
}
// on applique les canvas
for(var i = 0; i < plateauCanvas.length; i++){
    for(var j = 0; j < plateauCanvas[i].length; j++){
        var canvas = document.getElementById("canvas" + i + "/" + j);
        var widthCanvas = canvas.width;
        canvas.height *= 2;
        var heightCanvas = canvas.height;
        var contexte = canvas.getContext("2d");
        contexte.lineWidth = 8;
        contexte.strokeStyle = "black";
        if(i == 0 && j == 0){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, heightCanvas);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.moveTo(0, heightCanvas/2);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.stroke();
        }
        else if(i == 0 && j == plateauCanvas.length-1){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, heightCanvas);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.moveTo(widthCanvas/2, heightCanvas/2);
            contexte.lineTo(widthCanvas, heightCanvas/2);
            contexte.stroke();
        }
        else if(i == plateauCanvas.length-1 && j == 0){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, 0);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.moveTo(0, heightCanvas/2);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.stroke();
        }
        else if(i == plateauCanvas.length-1 && j == plateauCanvas.length-1){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, 0);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.moveTo(widthCanvas/2, heightCanvas/2);
            contexte.lineTo(widthCanvas, heightCanvas/2);
            contexte.stroke();
        }
        else if(i == plateauCanvas.length-1 && j > 0 && j < plateauCanvas.length-1){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, 0);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.moveTo(0, heightCanvas/2);
            contexte.lineTo(widthCanvas, heightCanvas/2);
            contexte.stroke();
        }
        else if(i == 0 && j > 0 && j < plateauCanvas.length-1){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, heightCanvas);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.moveTo(0, heightCanvas/2);
            contexte.lineTo(widthCanvas, heightCanvas/2);
            contexte.stroke();
        }
        else if(i > 0 && i < plateauCanvas.length-1 && j == 0){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, 0);
            contexte.lineTo(widthCanvas/2, heightCanvas);
            contexte.moveTo(0, heightCanvas/2);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.stroke();
        }
        else if(i > 0 && i < plateauCanvas.length-1 && j == plateauCanvas.length-1){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, 0);
            contexte.lineTo(widthCanvas/2, heightCanvas);
            contexte.moveTo(widthCanvas, heightCanvas/2);
            contexte.lineTo(widthCanvas/2, heightCanvas/2);
            contexte.stroke();
        }
        else if((i == 3 && j == 3) || (i == 3 && j == 9) || (i == 3 && j == 15) || (i == 9 && j == 3) || (i == 9 && j == 9) || (i == 9 && j == 15) || (i == 15 && j == 3) || (i == 15 && j == 9) || (i == 15 && j == 15)){
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, 0);
            contexte.lineTo(widthCanvas/2, heightCanvas);
            contexte.moveTo(0, heightCanvas/2);
            contexte.lineTo(widthCanvas, heightCanvas/2);
            contexte.stroke();
            contexte.beginPath();
            contexte.arc(widthCanvas/2, heightCanvas/2, heightCanvas/9, 0, 2*Math.PI);
            contexte.fill();
        }
        else{
            contexte.beginPath();
            contexte.moveTo(widthCanvas/2, 0);
            contexte.lineTo(widthCanvas/2, heightCanvas);
            contexte.moveTo(0, heightCanvas/2);
            contexte.lineTo(widthCanvas, heightCanvas/2);
            contexte.stroke();
        }
        
    }
}





// on declare un tableau de 19x19 en deux dimension qui contient la valeur des cases blanc/noir/vide
var valeurPlateau = [];
var tempoLigneValeurPlateau = [];
for(var i = 0; i < 19; i++){
    tempoLigneValeurPlateau = [];
    for(var j = 0; j < 19; j++){
        tempoLigneValeurPlateau.push("vide");
    }
    valeurPlateau.push(tempoLigneValeurPlateau);
}


// on pose une piece la ou on a cliquer sauf si c'est deja rempli
function onJoueLeCoupFonction(){
    // On recupere le coordonnee de la case qui a etait cliquer
    var id = this.id;
    var deuxPremiersAvecSlash = id.slice(0, 2);
    xLaNouvellePiece = "";
    for(var k = 0; k < deuxPremiersAvecSlash.length; k++){
        if(!isNaN(deuxPremiersAvecSlash[k])){
            xLaNouvellePiece += deuxPremiersAvecSlash[k];
        }
    }
    var deuxDerniersAvecSlash = id.slice(id.length -2, id.length);
    yLaNouvellePiece = "";
    for(var k = 0; k < deuxDerniersAvecSlash.length; k++){
        if(!isNaN(deuxDerniersAvecSlash[k])){
            yLaNouvellePiece += deuxDerniersAvecSlash[k];
        }
    }
    // on affiche le piece du joueur qui doit jouer et on passe au tour d'apres si la case en question n'est pas deja occuper
    if(auTourDesBlancs == true && valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == "vide"){
        plateau[xLaNouvellePiece][yLaNouvellePiece].src = pieceBlanche;
        plateau[xLaNouvellePiece][yLaNouvellePiece].style.opacity = 1;
        valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] = "blanc";
        idAQuiLeTour.src = pieceNoir;
        auTourDesBlancs = false;
    }
    else if(auTourDesBlancs == false && valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == "vide"){
        plateau[xLaNouvellePiece][yLaNouvellePiece].src = pieceNoir;
        plateau[xLaNouvellePiece][yLaNouvellePiece].style.opacity = 1;
        valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] = "noir";
        idAQuiLeTour.src = pieceBlanche;
        auTourDesBlancs = true;
    }

    yADeuxYeuxListeDePieceAuContactDesYeux = [];
    // apres avoir jouer on compte le nombre de liberte de la nouvelle piece si elle en a 0 on la supprime si elle en a moins de 4  on propage la verification
    combienDeLiberteFonction(xLaNouvellePiece, yLaNouvellePiece, false, true);
    // si il y a des enemies a capturer on les capture si il n'y en a pas on capture les allies
    if((lesPiecesQuiOntEteCaptureE1.length > 0 || lesPiecesQuiOntEteCaptureE2.length > 0 || lesPiecesQuiOntEteCaptureE3.length > 0 || lesPiecesQuiOntEteCaptureE4.length > 0) && yADeuxYeuxListeDePieceAuContactDesYeux.length == 0){
        for(var j = 0; j < lesPiecesQuiOntEteCaptureE1.length; j++){
            lesPiecesQuiOntEteCapture.push(lesPiecesQuiOntEteCaptureE1[j]);
        }
        for(var j = 0; j < lesPiecesQuiOntEteCaptureE2.length; j++){
            lesPiecesQuiOntEteCapture.push(lesPiecesQuiOntEteCaptureE2[j]);
        }
        for(var j = 0; j < lesPiecesQuiOntEteCaptureE3.length; j++){
            lesPiecesQuiOntEteCapture.push(lesPiecesQuiOntEteCaptureE3[j]);
        }
        for(var j = 0; j < lesPiecesQuiOntEteCaptureE4.length; j++){
            lesPiecesQuiOntEteCapture.push(lesPiecesQuiOntEteCaptureE4[j]);
        }
        onSupprimeLesCapturesFonction();
    }
    else{
        // on gere le cas ou la piece est pose dans un endroit ou elle ne peut pas et ne capture rien
        if((fonctionXMoinsUn(xLaNouvellePiece,yLaNouvellePiece) == "e" || fonctionXMoinsUn(xLaNouvellePiece,yLaNouvellePiece) == "u") && (fonctionXPlusUn(xLaNouvellePiece,yLaNouvellePiece) == "e" || fonctionXPlusUn(xLaNouvellePiece,yLaNouvellePiece) == "u") && (fonctionYMoinsUn(xLaNouvellePiece,yLaNouvellePiece) == "e" || fonctionYMoinsUn(xLaNouvellePiece,yLaNouvellePiece) == "u") && (fonctionYPlusUn(xLaNouvellePiece,yLaNouvellePiece) == "e" || fonctionYPlusUn(xLaNouvellePiece,yLaNouvellePiece) == "u")){
            if(auTourDesBlancs == true){
                plateau[xLaNouvellePiece][yLaNouvellePiece].src = "";
                valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] = "vide";
                idAQuiLeTour.src = pieceNoir;
                auTourDesBlancs = false;
            }
            else if(auTourDesBlancs == false){
                plateau[xLaNouvellePiece][yLaNouvellePiece].src = "";
                valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] = "vide";
                idAQuiLeTour.src = pieceBlanche;
                auTourDesBlancs = true;
            }
        }
        else{
            for(var j = 0; j < lesPiecesQuiOntEteCaptureA1.length; j++){
                lesPiecesQuiOntEteCapture.push(lesPiecesQuiOntEteCaptureA1[j]);
            }
            for(var j = 0; j < lesPiecesQuiOntEteCaptureA2.length; j++){
                lesPiecesQuiOntEteCapture.push(lesPiecesQuiOntEteCaptureA2[j]);
            }
            for(var j = 0; j < lesPiecesQuiOntEteCaptureA3.length; j++){
                lesPiecesQuiOntEteCapture.push(lesPiecesQuiOntEteCaptureA3[j]);
            }
            for(var j = 0; j < lesPiecesQuiOntEteCaptureA4.length; j++){
                lesPiecesQuiOntEteCapture.push(lesPiecesQuiOntEteCaptureA4[j]);
            }
            onSupprimeLesCapturesFonction();
        }
    }
    
   
    
}
// si on clique sur le bouton passer son tour on declanche la fonction associe
passerSonTour.addEventListener("click", passerSonTourFonction);
// on passe son tour si on clique sur le bouton passer son tour
function passerSonTourFonction(){
    // on passe au tour d'apres
    if(auTourDesBlancs == true){
        idAQuiLeTour.src = pieceNoir;
        auTourDesBlancs = false;
    }
    else if(auTourDesBlancs == false){
        idAQuiLeTour.src = pieceBlanche;
        auTourDesBlancs = true;
    }
    combienDeTourPasserDaffiler++;
    // si on passe deux tour d'affile
    if(combienDeTourPasserDaffiler >= 2){
        idfinDeParti.style.display = "";
        ouSontLesPoints();
        if(pointBlanc < pointNoir){
            idcouleurVainqueur.innerHTML = "Noir";
            idh2Vainqueur.style.backgroundColor = "black";
        }
        else{
            idcouleurVainqueur.innerHTML = "Blancs";
            idh2Vainqueur.style.backgroundColor = "white";
        }
        idh3Raison.innerHTML = "Les deux joueurs ont passés leur tour";
        idspanPointBlancFinal.innerHTML = pointBlanc;
        idspanPointNoirFinal.innerHTML = pointNoir;
    }
}
// si on veut abononner
idabandon.addEventListener("click", abandonnerFonction);
function abandonnerFonction(){
    idfinDeParti.style.display = "";
}



// cette fonction determine les nouveaux groupes de pierres une fois que la nouvelle est joue pour savoir qui doit etre supprimer
function combienDeLiberteFonction(x, y, estContamine, allie, groupe){
    x = parseInt(x);
    y = parseInt(y);
    estContamine = estContamine;
    allie = allie;
    groupe = groupe;
    if(estContamine == false){
        lesPiecesQuiOntEteCapture = [];
        lesPiecesQuiOntEteCaptureA1 = [];
        lesPiecesQuiOntEteCaptureA2 = [];
        lesPiecesQuiOntEteCaptureA3 = [];
        lesPiecesQuiOntEteCaptureA4 = [];
        lesPiecesQuiOntEteCaptureE1 = [];
        lesPiecesQuiOntEteCaptureE2 = [];
        lesPiecesQuiOntEteCaptureE3 = [];
        lesPiecesQuiOntEteCaptureE4 = [];
        // pour la premiere piece il faut forcer la propagation vers les enemies si il y en a
        if(fonctionXMoinsUn(x,y) == "e"){
            combienDeLiberteFonction(x-1, y, true, false, "e1");
        }
        if(fonctionXPlusUn(x,y) == "e"){
            combienDeLiberteFonction(x+1, y, true, false, "e2");
        }
        if(fonctionYMoinsUn(x,y) == "e"){
            combienDeLiberteFonction(x, y-1, true, false, "e3");
        }
        if(fonctionYPlusUn(x,y) == "e"){
            combienDeLiberteFonction(x, y+1, true, false, "e4");
        }

        if(fonctionXMoinsUn(x,y) == "a"){
            combienDeLiberteFonction(x-1, y, true, true, "a1");
        }
        if(fonctionXPlusUn(x,y) == "a"){
            combienDeLiberteFonction(x+1, y, true, true, "a2");
        }
        if(fonctionYMoinsUn(x,y) == "a"){
            combienDeLiberteFonction(x, y-1, true, true, "a3");
        }
        if(fonctionYPlusUn(x,y) == "a"){
            combienDeLiberteFonction(x, y+1, true, true, "a4");
        }
    }



    // on propage le groupe au pieces du meme type sauf si elles on encore des libertees
    if(allie == true && lesPiecesQuiOntEteCaptureA1.includes(x + "/" + y) == false && lesPiecesQuiOntEteCaptureA2.includes(x + "/" + y) == false && lesPiecesQuiOntEteCaptureA3.includes(x + "/" + y) == false && lesPiecesQuiOntEteCaptureA4.includes(x + "/" + y) == false){
        if(fonctionXMoinsUn(x,y) != "v" && fonctionXPlusUn(x,y) != "v" && fonctionYMoinsUn(x,y) != "v" && fonctionYPlusUn(x,y) != "v"){
            // si la piece n'as aucune liberte alors on propage au cote similaire
            if(groupe == "a1"){
                lesPiecesQuiOntEteCaptureA1.push(x + "/" + y);
            }
            if(groupe == "a2"){
                lesPiecesQuiOntEteCaptureA2.push(x + "/" + y);
            }
            if(groupe == "a3"){
                lesPiecesQuiOntEteCaptureA3.push(x + "/" + y);
            }
            if(groupe == "a4"){
                lesPiecesQuiOntEteCaptureA4.push(x + "/" + y);
            }

            if(fonctionXMoinsUn(x,y) == "a"){
                combienDeLiberteFonction(x-1, y, true, true, groupe);
            }
            if(fonctionXPlusUn(x,y) == "a"){
                combienDeLiberteFonction(x+1, y, true, true, groupe);
            }
            if(fonctionYMoinsUn(x,y) == "a"){
                combienDeLiberteFonction(x, y-1, true, true, groupe);
            }
            if(fonctionYPlusUn(x,y) == "a"){
                combienDeLiberteFonction(x, y+1, true, true, groupe);
            }
        }
        else{
            // si la piece a un cote vide on ne capture pas le groupe
            if(groupe == "a1"){
                lesPiecesQuiOntEteCaptureA1 = [];
            }
            if(groupe == "a2"){
                lesPiecesQuiOntEteCaptureA2 = [];
            }
            if(groupe == "a3"){
                lesPiecesQuiOntEteCaptureA3 = [];
            }
            if(groupe == "a4"){
                lesPiecesQuiOntEteCaptureA4 = [];
            }
        }
    }
    else if(allie == false && lesPiecesQuiOntEteCaptureE1.includes(x + "/" + y) == false && lesPiecesQuiOntEteCaptureE2.includes(x + "/" + y) == false && lesPiecesQuiOntEteCaptureE3.includes(x + "/" + y) == false && lesPiecesQuiOntEteCaptureE4.includes(x + "/" + y) == false && yADeuxYeuxListeDePieceAuContactDesYeux.includes(x + "/" + y) == false){
        if(fonctionXMoinsUn(x,y) != "v" && fonctionXPlusUn(x,y) != "v" && fonctionYMoinsUn(x,y) != "v" && fonctionYPlusUn(x,y) != "v"){
            // si la piece n'as aucune liberte alors on propage au cote similaire
            if(groupe == "e1"){
                lesPiecesQuiOntEteCaptureE1.push(x + "/" + y);
            }
            if(groupe == "e2"){
                lesPiecesQuiOntEteCaptureE2.push(x + "/" + y);
            }
            if(groupe == "e3"){
                lesPiecesQuiOntEteCaptureE3.push(x + "/" + y);
            }
            if(groupe == "e4"){
                lesPiecesQuiOntEteCaptureE4.push(x + "/" + y);
            }

            if(fonctionXMoinsUn(x,y) == "e"){
                combienDeLiberteFonction(x-1, y, true, false, groupe);
            }
            if(fonctionXPlusUn(x,y) == "e"){
                combienDeLiberteFonction(x+1, y, true, false, groupe);
            }
            if(fonctionYMoinsUn(x,y) == "e"){
                combienDeLiberteFonction(x, y-1, true, false, groupe);
            }
            if(fonctionYPlusUn(x,y) == "e"){
                combienDeLiberteFonction(x, y+1, true, false, groupe);
            }
        }
        else{
            // si la piece a un cote vide on ne capture pas le groupe
            if(groupe == "e1"){
                lesPiecesQuiOntEteCaptureE1 = [];
            }
            if(groupe == "e2"){
                lesPiecesQuiOntEteCaptureE2 = [];
            }
            if(groupe == "e3"){
                lesPiecesQuiOntEteCaptureE3 = [];
            }
            if(groupe == "e4"){
                lesPiecesQuiOntEteCaptureE4 = [];
            }
            yADeuxYeuxListeDePieceAuContactDesYeux.push(x + "/" + y);
        }
    }
}
// ces 4 fonction renvoie ce qui ce trouve a cote d'une pierre soit u pour les cotes du bord a pour les pierres allies e pour les pierres enemies et v pour les cases vides
function fonctionXMoinsUn(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if(x == 0){
        return "u";
    }
    if(((valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == valeurPlateau[x][y] && valeurPlateau[x-1][y] == valeurPlateau[x][y]) || (valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] != valeurPlateau[x][y] && valeurPlateau[x-1][y] != valeurPlateau[x][y])) && valeurPlateau[x-1][y] != "vide"){
        return "a";
    }
    else if(((valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] != valeurPlateau[x][y] && valeurPlateau[x-1][y] == valeurPlateau[x][y]) || (valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == valeurPlateau[x][y] && valeurPlateau[x-1][y] != valeurPlateau[x][y])) && valeurPlateau[x-1][y] != "vide"){
        return "e";
    }
    else if(valeurPlateau[x-1][y] == "vide"){
        return "v";
    }
}
function fonctionXPlusUn(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if(x == 18){
        return "u";
    }
    if(((valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == valeurPlateau[x][y] && valeurPlateau[x+1][y] == valeurPlateau[x][y]) || (valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] != valeurPlateau[x][y] && valeurPlateau[x+1][y] != valeurPlateau[x][y])) && valeurPlateau[x+1][y] != "vide"){
        return "a";
    }
    else if(((valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] != valeurPlateau[x][y] && valeurPlateau[x+1][y] == valeurPlateau[x][y]) || (valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == valeurPlateau[x][y] && valeurPlateau[x+1][y] != valeurPlateau[x][y])) && valeurPlateau[x+1][y] != "vide"){
        return "e";
    }
    else if(valeurPlateau[x+1][y] == "vide"){
        return "v";
    }
}
function fonctionYMoinsUn(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if(y == 0){
        return "u";
    }
    if(((valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == valeurPlateau[x][y] && valeurPlateau[x][y-1] == valeurPlateau[x][y]) || (valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] != valeurPlateau[x][y] && valeurPlateau[x][y-1] != valeurPlateau[x][y])) && valeurPlateau[x][y-1] != "vide"){
        return "a";
    }
    else if(((valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] != valeurPlateau[x][y] && valeurPlateau[x][y-1] == valeurPlateau[x][y]) || (valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == valeurPlateau[x][y] && valeurPlateau[x][y-1] != valeurPlateau[x][y])) && valeurPlateau[x][y-1] != "vide"){
        return "e";
    }
    else if(valeurPlateau[x][y-1] == "vide"){
        return "v";
    }
}
function fonctionYPlusUn(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if(y == 18){
        return "u";
    }
    if(((valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == valeurPlateau[x][y] && valeurPlateau[x][y+1] == valeurPlateau[x][y]) || (valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] != valeurPlateau[x][y] && valeurPlateau[x][y+1] != valeurPlateau[x][y])) && valeurPlateau[x][y+1] != "vide"){
        return "a";
    }
    else if(((valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] != valeurPlateau[x][y] && valeurPlateau[x][y+1] == valeurPlateau[x][y]) || (valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == valeurPlateau[x][y] && valeurPlateau[x][y+1] != valeurPlateau[x][y])) && valeurPlateau[x][y+1] != "vide"){
        return "e";
    }
    else if(valeurPlateau[x][y+1] == "vide"){
        return "v";
    }
}


// apres avoir determine qui doit etre supprimer on le fait
function onSupprimeLesCapturesFonction(){
    combienDeTourPasserDaffiler = 0;
    for(var i = 0; i < lesPiecesQuiOntEteCapture.length; i++){
        // pour chaque pieces on recupere son x et son y
        var deuxPremiersAvecSlash = lesPiecesQuiOntEteCapture[i].slice(0, 2);
        var deuxPremiers = "";
        for(var k = 0; k < deuxPremiersAvecSlash.length; k++){
            if(!isNaN(deuxPremiersAvecSlash[k])){
                deuxPremiers += deuxPremiersAvecSlash[k];
            }
        }
        var deuxDerniersAvecSlash = lesPiecesQuiOntEteCapture[i].slice(lesPiecesQuiOntEteCapture[i].length -2, lesPiecesQuiOntEteCapture[i].length);
        var deuxDerniers = "";
        for(var k = 0; k < deuxDerniersAvecSlash.length; k++){
            if(!isNaN(deuxDerniersAvecSlash[k])){
                deuxDerniers += deuxDerniersAvecSlash[k];
            }
        }
        // avec son x et son y on le supprime
        plateau[deuxPremiers][deuxDerniers].src = "";
        valeurPlateau[deuxPremiers][deuxDerniers] = "vide";
    }

    // on verifie si la configuration a deja eu lieu
    repetitionOuPasFonction();
}
// on appelle cette fonciton pour quelle demarre en comptant le plateau de depart (avant le 1er coup)
repetitionOuPasFonction();
// cette fonction creer un tableau en 3d qui stock toutes les anciennes position du plateau si elle est deja apparu on le signal et on l'empeche
function repetitionOuPasFonction(){
    yARepetition = false;
    // on ajoute la nouvelle configuration du plateau de jeu 
    var tempoToutesLesPrecedentesPositions = [];
    var tempoTempoToutesLesPrecedentesPositions = [];
    for(var j = 0; j < 19; j++){
        tempoToutesLesPrecedentesPositions = [];
        for(var k = 0; k < 19; k++){
            tempoToutesLesPrecedentesPositions.push(valeurPlateau[j][k]);
        }
        tempoTempoToutesLesPrecedentesPositions.push(tempoToutesLesPrecedentesPositions);
    }
    toutesLesPrecedentesPositions.push(tempoTempoToutesLesPrecedentesPositions);

    // on verifie si elle a deja eu lieu
    for(var i = 0; i < toutesLesPrecedentesPositions.length-2; i++){
        var combienRepetition = 0;
        for(var j = 0; j < 19; j++){
            for(var k = 0; k < 19; k++){
                if(toutesLesPrecedentesPositions[toutesLesPrecedentesPositions.length-1][j][k] == toutesLesPrecedentesPositions[i][j][k]){
                    combienRepetition++;
                    if(combienRepetition == 361){
                        alert("On l'a deja vu ca, non ?\n On ne peut pas reproduire le meme goban au go");
                        // on remet comme c'etait
                        // le tour des joueurs et la nouvelle piece
                        if(auTourDesBlancs == true){
                            plateau[xLaNouvellePiece][yLaNouvellePiece].src = "";
                            valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] = "vide";
                            idAQuiLeTour.src = pieceNoir;
                            auTourDesBlancs = false;
                        }
                        else if(auTourDesBlancs == false){
                            plateau[xLaNouvellePiece][yLaNouvellePiece].src = "";
                            valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] = "vide";
                            idAQuiLeTour.src = pieceBlanche;
                            auTourDesBlancs = true;
                        }
                        // les pieces qui ont ete capturees
                        for(var i = 0; i < lesPiecesQuiOntEteCapture.length; i++){
                            // pour chaque pieces on recupere son x et son y
                            var deuxPremiersAvecSlash = lesPiecesQuiOntEteCapture[i].slice(0, 2);
                            var deuxPremiers = "";
                            for(var k = 0; k < deuxPremiersAvecSlash.length; k++){
                                if(!isNaN(deuxPremiersAvecSlash[k])){
                                    deuxPremiers += deuxPremiersAvecSlash[k];
                                }
                            }
                            var deuxDerniersAvecSlash = lesPiecesQuiOntEteCapture[i].slice(lesPiecesQuiOntEteCapture[i].length -2, lesPiecesQuiOntEteCapture[i].length);
                            var deuxDerniers = "";
                            for(var k = 0; k < deuxDerniersAvecSlash.length; k++){
                                if(!isNaN(deuxDerniersAvecSlash[k])){
                                    deuxDerniers += deuxDerniersAvecSlash[k];
                                }
                            }
                            // avec son x et son y on remet comme c'etait
                            if(lesPiecesQuiOntEteCapture.length > 0){
                                if(lesPiecesQuiOntEteCapture.includes(xLaNouvellePiece + "/" + yLaNouvellePiece)){
                                    if(auTourDesBlancs == true){
                                        plateau[deuxPremiers][deuxDerniers].src = pieceBlanche;
                                        valeurPlateau[deuxPremiers][deuxDerniers] = "blanc";
                                    }
                                    else{
                                        plateau[deuxPremiers][deuxDerniers].src = pieceNoir;
                                        valeurPlateau[deuxPremiers][deuxDerniers] = "noir";
                                    }
                                }
                                else{
                                    if(auTourDesBlancs == false){
                                        plateau[deuxPremiers][deuxDerniers].src = pieceBlanche;
                                        valeurPlateau[deuxPremiers][deuxDerniers] = "blanc";
                                    }
                                    else{
                                        plateau[deuxPremiers][deuxDerniers].src = pieceNoir;
                                        valeurPlateau[deuxPremiers][deuxDerniers] = "noir";
                                    }
                                }
                            }
                        }
                        return 0;
                    }
                }
            }
        }
    }
    if(compterPointChaqueTour == true){
        ouSontLesPoints();
    }
}


// permt de recuperer les cases vides
function ouSontLesPoints(){
    tableauCasesVides = [];
    grosGroupeDeVide = [];
    pointBlanc = 6.5;
    pointNoir = 0;
    for(var i = 0; i < valeurPlateau.length; i++){
        for(var j = 0; j < valeurPlateau[i].length; j++){
            if(valeurPlateau[i][j] == "vide"){
                // pour toutes les cases vides
                tableauCasesVides.push(i + "/" + j);
            }
        }
    }
    for(var i = 0; i < tableauCasesVides.length; i++){
        // on recupere les x et y
        var deuxPremiersAvecSlash = tableauCasesVides[i].slice(0, 2);
        var deuxPremiers = "";
        for(var k = 0; k < deuxPremiersAvecSlash.length; k++){
            if(!isNaN(deuxPremiersAvecSlash[k])){
                deuxPremiers += deuxPremiersAvecSlash[k];
            }
        }
        var deuxDerniersAvecSlash = tableauCasesVides[i].slice(tableauCasesVides[i].length -2, tableauCasesVides[i].length);
        var deuxDerniers = "";
        for(var k = 0; k < deuxDerniersAvecSlash.length; k++){
            if(!isNaN(deuxDerniersAvecSlash[k])){
                deuxDerniers += deuxDerniersAvecSlash[k];
            }
        }
        aQuiLePoint = "";
        groupeDeVide = [];
        // pour eviter de faire des verifications inutiles on filtre les cases deja compter
        if(grosGroupeDeVide.includes(deuxPremiers + "/" + deuxDerniers) == false){
            propoagationComptageFonction(deuxPremiers, deuxDerniers);
        }
        if(aQuiLePoint == "blanc"){
            pointBlanc += groupeDeVide.length;
        }
        else if(aQuiLePoint == "noir"){
            pointNoir += groupeDeVide.length;
        }
        // on met a jour grosGroupeDeVide
        for(var u = 0; u < groupeDeVide.length; u++){
            grosGroupeDeVide.push(groupeDeVide[u]);
        }
    }
    alerterPointFonction();
}
function propoagationComptageFonction(x, y){
    x = parseInt(x);
    y = parseInt(y);
    // notre case est vide on regarde a cote si on rencontre une pierre on le prend en compte pour les points si u on redirige sinon on continue
    if(groupeDeVide.includes(x + "/" + y) == false){
        groupeDeVide.push(x + "/" + y);
        // x-1
        if(compterXMoinsUn(x, y) == "v"){
            propoagationComptageFonction(x-1, y);
        }
        else if(compterXMoinsUn(x, y) == "b"){
            if(aQuiLePoint == ""){
                aQuiLePoint = "blanc";
            }
            else if(aQuiLePoint == "noir"){
                aQuiLePoint = "PasDePoint";
            }    
        }
        else if(compterXMoinsUn(x, y) == "n"){
            if(aQuiLePoint == ""){
                aQuiLePoint = "noir";
            }
            else if(aQuiLePoint == "blanc"){
                aQuiLePoint = "PasDePoint";
            }  
        }
        // x+1
        if(compterXPlusUn(x, y) == "v"){
            propoagationComptageFonction(x+1, y);
        }
        else if(compterXPlusUn(x, y) == "b"){
            if(aQuiLePoint == ""){
                aQuiLePoint = "blanc";
            }
            else if(aQuiLePoint == "noir"){
                aQuiLePoint = "PasDePoint";
            }
        }
        else if(compterXPlusUn(x, y) == "n"){
            if(aQuiLePoint == ""){
                aQuiLePoint = "noir";
            }
            else if(aQuiLePoint == "blanc"){
                aQuiLePoint = "PasDePoint";
            } 
        }
        // y-1
        if(compterYMoinsUn(x, y) == "v"){
            propoagationComptageFonction(x, y-1);
        }
        else if(compterYMoinsUn(x, y) == "b"){
            if(aQuiLePoint == ""){
                aQuiLePoint = "blanc";
            }
            else if(aQuiLePoint == "noir"){
                aQuiLePoint = "PasDePoint";
            }    
        }
        else if(compterYMoinsUn(x, y) == "n"){
            if(aQuiLePoint == ""){
                aQuiLePoint = "noir";
            }
            else if(aQuiLePoint == "blanc"){
                aQuiLePoint = "PasDePoint";
            }   
        }
        // y+1
        if(compterYPlusUn(x, y) == "v"){
            propoagationComptageFonction(x, y+1);
        }
        else if(compterYPlusUn(x, y) == "b"){
            if(aQuiLePoint == ""){
                aQuiLePoint = "blanc";
            }
            else if(aQuiLePoint == "noir"){
                aQuiLePoint = "PasDePoint";
            }  
        }
        else if(compterYPlusUn(x, y) == "n"){
            if(aQuiLePoint == ""){
                aQuiLePoint = "noir";
            }
            else if(aQuiLePoint == "blanc"){
                aQuiLePoint = "PasDePoint";
            }   
        }
    }
}
// prende une case (vide) en parametre et renvoie ce qu'il y a a cote
function compterXMoinsUn(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if(x <= 0){
        return "u";
    }
    else if(valeurPlateau[x-1][y] == "vide"){
        return "v";
    }
    else if(valeurPlateau[x-1][y] == "blanc"){
        return "b";
    }
    else if(valeurPlateau[x-1][y] == "noir"){
        return "n";
    }
}
function compterXPlusUn(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if(x >= 18){
        return "u";
    }
    else if(valeurPlateau[x+1][y] == "vide"){
        return "v";
    }
    else if(valeurPlateau[x+1][y] == "blanc"){
        return "b";
    }
    else if(valeurPlateau[x+1][y] == "noir"){
        return "n";
    }
}
function compterYMoinsUn(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if(y <= 0){
        return "u";
    }
    else if(valeurPlateau[x][y-1] == "vide"){
        return "v";
    }
    else if(valeurPlateau[x][y-1] == "blanc"){
        return "b";
    }
    else if(valeurPlateau[x][y-1] == "noir"){
        return "n";
    }
}
function compterYPlusUn(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if(y >= 18){
        return "u";
    }
    else if(valeurPlateau[x][y+1] == "vide"){
        return "v";
    }
    else if(valeurPlateau[x][y+1] == "blanc"){
        return "b";
    }
    else if(valeurPlateau[x][y+1] == "noir"){
        return "n";
    }
}


alerterPointFonction();
// on affiche les points
function alerterPointFonction(){
    spanPointBlanc.innerHTML = pointBlanc;
    spanPointNoir.innerHTML = pointNoir;
}

function onPrevisualiseLeCoupFonction(){
    // On recupere le coordonnee de la case qui a etait survoler
    var id = this.id;
    var deuxPremiersAvecSlash = id.slice(0, 8);
    xLaNouvellePiece = "";
    for(var k = 0; k < deuxPremiersAvecSlash.length; k++){
        if(!isNaN(deuxPremiersAvecSlash[k])){
            xLaNouvellePiece += deuxPremiersAvecSlash[k];
        }
    }
    var deuxDerniersAvecSlash = id.slice(id.length -2, id.length);
    yLaNouvellePiece = "";
    for(var k = 0; k < deuxDerniersAvecSlash.length; k++){
        if(!isNaN(deuxDerniersAvecSlash[k])){
            yLaNouvellePiece += deuxDerniersAvecSlash[k];
        }
    }
    // on affiche le piece du joueur qui doit jouer en mode previsualisation
    if(auTourDesBlancs == true && valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == "vide"){
        plateau[xLaNouvellePiece][yLaNouvellePiece].src = pieceBlanche;
        plateau[xLaNouvellePiece][yLaNouvellePiece].style.opacity = 0.5;
    }
    else if(auTourDesBlancs == false && valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == "vide"){
        plateau[xLaNouvellePiece][yLaNouvellePiece].src = pieceNoir;
        plateau[xLaNouvellePiece][yLaNouvellePiece].style.opacity = 0.5;
    }
}
function onNePrevisulisePlusFonciton(){
    // On recupere le coordonnee de la case qui a etait survoler
    var id = this.id;
    var deuxPremiersAvecSlash = id.slice(0, 2);
    xLaNouvellePiece = "";
    for(var k = 0; k < deuxPremiersAvecSlash.length; k++){
        if(!isNaN(deuxPremiersAvecSlash[k])){
            xLaNouvellePiece += deuxPremiersAvecSlash[k];
        }
    }
    var deuxDerniersAvecSlash = id.slice(id.length -2, id.length);
    yLaNouvellePiece = "";
    for(var k = 0; k < deuxDerniersAvecSlash.length; k++){
        if(!isNaN(deuxDerniersAvecSlash[k])){
            yLaNouvellePiece += deuxDerniersAvecSlash[k];
        }
    }
    // on affiche le piece du joueur qui doit jouer en mode previsualisation
    if(auTourDesBlancs == true && valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == "vide"){
        plateau[xLaNouvellePiece][yLaNouvellePiece].src = "";
        plateau[xLaNouvellePiece][yLaNouvellePiece].style.opacity = 1;
    }
    else if(auTourDesBlancs == false && valeurPlateau[xLaNouvellePiece][yLaNouvellePiece] == "vide"){
        plateau[xLaNouvellePiece][yLaNouvellePiece].src = "";
        plateau[xLaNouvellePiece][yLaNouvellePiece].style.opacity = 1;
    }
}

// on gere la navigation sur le site
idJouer.addEventListener("click", function(){
    window.location.href = "/home/lelouch/Bureau/Go Play/Go Play Jouer.html";
    }
);
idMesParties.addEventListener("click", function(){
    window.location.href = "/home/lelouch/Bureau/Go Play/Go Play Mes Parties.html";
    }
);
idProfil.addEventListener("click", function(){
    window.location.href = "/home/lelouch/Bureau/Go Play/Go Play Profil.html";
    }
);
idClassement.addEventListener("click", function(){
    window.location.href = "/home/lelouch/Bureau/Go Play/Go Play Classement.html";
    }
);
idZoneReglage.style.display = "none";
idReglages.addEventListener("click", function(){
    idZoneReglage.style.display = "";
    idZoneRegles.style.display = "none";
    }
);
idZoneReglage.addEventListener("click", function(){
    idZoneReglage.style.display = "none";
    }
);
idBarrePlus.style.display = "none";
idPlus.addEventListener("mouseover", function(){
    idBarrePlus.style.display = "";
    }
);
idPlus.addEventListener("mouseout", function(){
    idBarrePlus.style.display = "none";
    }
);
idBarrePlus.addEventListener("mouseover", function(){
    idBarrePlus.style.display = "";
    }
);
idBarrePlus.addEventListener("mouseout", function(){
    idBarrePlus.style.display = "none";
    }
);
idZoneRegles.style.display = "none";
idRegles.addEventListener("click", function(){
    idZoneRegles.style.display = "";
    idZoneReglage.style.display = "none";
    }
);
idZoneRegles.addEventListener("click", function(){
    idZoneRegles.style.display = "none";
    }
);
idfinDeParti.style.display = "none";
idcroixFinDeParti.addEventListener("click", function(){
    idfinDeParti.style.display = "none";
})

// la possibilte de rejouer en fin de partie
idrejouer.addEventListener("click", function(){
    window.location.href = "/home/lelouch/Bureau/Go Play/Go Play Goban.html";
    }
);









/*
// on recuperer les elements canvas html du plateau en deux dimensions


// on applique les canvas
var canvas = document.getElementById("plateauCanvas");
var contexte = canvas.getContext("2d");
contexte.strokeStyle = "#48C";
contexte.beginPath();
contexte.lineWidth = "5";
contexte.moveTo(50,50);
contexte.lineTo(350,150);
contexte.lineTo(50,150);
contexte.lineTo(50,50);
contexte.stroke();































// on applique les canvas
var canvas = document.getElementById("plateau");
var widthCanvas = canvas.width;
var heightCanvas = canvas.height;
var contexte = canvas.getContext("2d");
contexte.strokeStyle = "green";
contexte.beginPath();
contexte.lineWidth = 100;
contexte.moveTo(widthCanvas/2, 0);
contexte.lineTo(widthCanvas/2, heightCanvas);
contexte.moveTo(0, heightCanvas/2);
contexte.lineTo(widthCanvas, heightCanvas/2);
contexte.stroke();



// on applique les canvas
for(var i = 0; i < tableauCanvas.length; i++){
    for(var j = 0; j < tableauCanvas[i].length; j++){
        var canvas = document.getElementById("canvas" + i + "/" + j);
        var widthCanvas = canvas.width;
        var heightCanvas = canvas.height;

        
        var contexte = canvas.getContext("2d");
        contexte.strokeStyle = "black";
        contexte.beginPath();
        contexte.lineWidth = 10;
        contexte.moveTo(widthCanvas/2, 0);
        contexte.lineTo(widthCanvas/2, heightCanvas);
        contexte.moveTo(0, heightCanvas/2);
        contexte.lineTo(widthCanvas, heightCanvas/2);
        contexte.stroke();
    }
}






*/

