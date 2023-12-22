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
var idimgTempsPlus = document.getElementById("imgTempsPlus");
var idimgGobanPlus = document.getElementById("imgGobanPlus");
var idimgModePlus = document.getElementById("imgModePlus");
var cliqueimgTempsPlus = false;
var cliqueimgGobanPlus = false;
var cliqueimgModePlus = false;
var idlisteChoixTemps = document.getElementById("listeChoixTemps");
var idlisteChoixGoban = document.getElementById("listeChoixGoban");
var idlisteChoixMode = document.getElementById("listeChoixMode");
var idchoixTemps = document.getElementById("choixTemps");
var idtempsChoix1 = document.getElementById("tempsChoix1");
var idtempsChoix2 = document.getElementById("tempsChoix2");
var idchoixGoban = document.getElementById("choixGoban");
var idgobanChoix1 = document.getElementById("gobanChoix1");
var idgobanChoix2 = document.getElementById("gobanChoix2");
var idgobanChoix3 = document.getElementById("gobanChoix3");
var idchoixMode = document.getElementById("choixMode");
var idmodeChoix1 = document.getElementById("modeChoix1");
var idmodeChoix2 = document.getElementById("modeChoix2");
var idmodeChoix3 = document.getElementById("modeChoix3");
var idboutonJouer = document.getElementById("boutonJouer");



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



// la fonctionalite de la page
// les choix de vitesse et de plateau
idlisteChoixTemps.style.display = "none";
idimgTempsPlus.addEventListener("click", function(){
    if(cliqueimgTempsPlus == false){
        idimgTempsPlus.src = "img/chevron-up.svg";
        cliqueimgTempsPlus = true;
        idlisteChoixTemps.style.display = "";
    }
    else{
        idimgTempsPlus.src = "img/chevron-down.svg";
        cliqueimgTempsPlus = false;
        idlisteChoixTemps.style.display = "none";
    }
    }
);
idlisteChoixGoban.style.display = "none";
idimgGobanPlus.addEventListener("click", function(){
    if(cliqueimgGobanPlus == false){
        idimgGobanPlus.src = "img/chevron-up.svg";
        cliqueimgGobanPlus = true;
        idlisteChoixGoban.style.display = "";
    }
    else{
        idimgGobanPlus.src = "img/chevron-down.svg";
        cliqueimgGobanPlus = false;
        idlisteChoixGoban.style.display = "none";
    }
    }
);
idlisteChoixMode.style.display = "none";
idimgModePlus.addEventListener("click", function(){
    if(cliqueimgModePlus == false){
        idimgModePlus.src = "img/chevron-up.svg";
        cliqueimgModePlus = true;
        idlisteChoixMode.style.display = "";
    }
    else{
        idimgModePlus.src = "img/chevron-down.svg";
        cliqueimgModePlus = false;
        idlisteChoixMode.style.display = "none";
    }
    }
);
idtempsChoix1.addEventListener("click", function(){
    idlisteChoixTemps.style.display = "none";
    idchoixTemps.innerHTML = "30s";
    cliqueimgTempsPlus = false;
    idimgTempsPlus.src = "img/chevron-down.svg";
    }
);
idtempsChoix2.addEventListener("click", function(){
    idlisteChoixTemps.style.display = "none";
    idchoixTemps.innerHTML = "24h";
    cliqueimgTempsPlus = false;
    idimgTempsPlus.src = "img/chevron-down.svg";
    }
);
idgobanChoix1.addEventListener("click", function(){
    idlisteChoixGoban.style.display = "none";
    idchoixGoban.innerHTML = "9x9";
    idimgGobanPlus.src = "img/chevron-down.svg";
    cliqueimgGobanPlus = false;
    }
);
idgobanChoix2.addEventListener("click", function(){
    idlisteChoixGoban.style.display = "none";
    idchoixGoban.innerHTML = "13x13";
    idimgGobanPlus.src = "img/chevron-down.svg";
    cliqueimgGobanPlus = false;
    }
);
idgobanChoix3.addEventListener("click", function(){
    idlisteChoixGoban.style.display = "none";
    idchoixGoban.innerHTML = "19x19";
    idimgGobanPlus.src = "img/chevron-down.svg";
    cliqueimgGobanPlus = false;
    }
);
idmodeChoix1.addEventListener("click", function(){
    idlisteChoixMode.style.display = "none";
    idchoixMode.innerHTML = "Jouer en ligne";
    idimgModePlus.src = "img/chevron-down.svg";
    cliqueimgModePlus = false;
    }
);
idmodeChoix2.addEventListener("click", function(){
    idlisteChoixMode.style.display = "none";
    idchoixMode.innerHTML = "Passer et jouer";
    idimgModePlus.src = "img/chevron-down.svg";
    cliqueimgModePlus = false;
    }
);
idmodeChoix3.addEventListener("click", function(){
    idlisteChoixMode.style.display = "none";
    idchoixMode.innerHTML = "Jouer avec un ami";
    idimgModePlus.src = "img/chevron-down.svg";
    cliqueimgModePlus = false;
    }
);
//lancer la parti
idboutonJouer.addEventListener("click", function(){
    window.location.href = "/home/lelouch/Bureau/Go Play/Go Play Goban.html";
    }
);