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