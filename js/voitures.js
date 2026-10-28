
import { voituresInitiales } from "./data.js";

const Marque = document.getElementById("marque");
const Modele = document.getElementById("modele");
const matricul = document.getElementById("immatriculation");
const catygorie = document.getElementById("categorie");
const PrixJ = document.getElementById("prix-jour");
const statut = document.getElementById("statut");
const AjoutBTn = document.getElementById("bouton-enregistrer")
const annuler = document.getElementById("annuler-modification");
const serch = document.getElementById("recherche");
let voitures = [...voituresInitiales];
let cheker = 0;
let voiture;

const liste_voitures = document.querySelector("#liste-voitures");
display();
function display() {

    liste_voitures.textContent = "";
    voitures.forEach(voiture => {

        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        const strong1 = document.createElement("strong");
        strong1.textContent = voiture.marque;
        td1.appendChild(strong1);

        const td2 = document.createElement("td");
        td2.textContent = voiture.modele;

        const td3 = document.createElement("td");
        const span1 = document.createElement("span");
        span1.textContent = voiture.immatriculation;
        span1.className = "registration";
        td3.appendChild(span1);

        const td4 = document.createElement("td");
        td4.textContent = voiture.categorie;

        const td5 = document.createElement("td");
        td5.textContent = voiture.prixJour;
        td5.className = "price";
        const span2 = document.createElement("span");
        span2.textContent = "Prix / jour";
        td5.appendChild(span2);

        const td6 = document.createElement("td");
        const span3 = document.createElement("span");
        span3.className = "badge";
        span3.textContent = voiture.statut
        if (voiture.statut === "Disponible") span3.classList.add("badge-disponible");
        else if (voiture.statut === "Louée") span3.classList.add("badge-louee");
        else span3.classList.add("badge-maintenance"); td6.appendChild(span3);

        const td7 = document.createElement("td")

        const div = document.createElement("div");
        div.className = "row-actions";


        const Modifier = document.createElement("button");
        Modifier.textContent = "Modifier";
        Modifier.className = "button button-edit";
        Modifier.addEventListener("click", () => (Modifier_fun(voiture.id)))
        div.appendChild(Modifier)

        const Supprimer = document.createElement("button");
        Supprimer.textContent = "Supprimer";
        Supprimer.className = "button button-delete";
        Supprimer.addEventListener("click", () => (Supprimer_fun(voiture.immatriculation)))
        div.appendChild(Supprimer);

        td7.appendChild(div)
        tr.append(td1, td2, td3, td4, td5, td6, td7)
        //  tr.appendChilde(td1);
        //  tr.appendChilde(td2);
        //  tr.appendChilde(td3);
        //  tr.appendChilde(td4);
        //  tr.appendChilde(td5);
        //  tr.appendChilde(td6);


        liste_voitures.appendChild(tr);


    });
}


function ajouter() {
    voitures.push({
        id: voitures.lenght + 1,
        marque: Marque.value,
        modele: Modele.value,
        immatriculation: matricul.value,
        categorie: catygorie.value,
        prixJour: PrixJ.value,
        statut: statut.value
    })

    Marque.value = "";
    Modele.value = "";
    matricul.value = "";
    catygorie.value = "";
    PrixJ.value = "";

}
annuler.addEventListener("click", (e) => {
    e.preventDefault();
    AjoutBTn.textContent = "Ajouter la voiture";
    Marque.value = "";
    Modele.value = "";
    matricul.value = "";
    catygorie.value = "";
    PrixJ.value = "";
    display();
});
AjoutBTn.addEventListener("click", (e) => {
    e.preventDefault();
    if (Marque.value === "" ||
        Modele.value === "" ||
        matricul.value === "" ||
        catygorie.value === "" ||
        PrixJ.value === "" ||
        statut.value === "") {
        alert("obliger d'entrer tout les information ");
        return;
    }
    else if (cheker === 0) {
        ajouter();
        display();
    }
    else if (cheker !== 0) {
        voiture.marque = Marque.value;
        voiture.modele = Modele.value;
        voiture.immatriculation = matricul.value;
        voiture.categorie = catygorie.value;
        voiture.prixJour = PrixJ.value;
        voiture.statut = statut.value;

        cheker = 0;
        AjoutBTn.textContent = " Ajouter la voiture";
        annuler.hidden = true;
        Marque.value = "";
        Modele.value = "";
        matricul.value = "";
        catygorie.value = "";
        PrixJ.value = "";
    }

    display();



});
annuler.addEventListener("click", (e) => {
    e.preventDefault();
        cheker = 0;
        AjoutBTn.textContent = "Ajouter la voiture";
        annuler.hidden = true;
        Marque.value = "";
        Modele.value = "";
        matricul.value = "";
        catygorie.value = "";
        PrixJ.value = "";

});

function Supprimer_fun(matricul) {
    const delet = confirm("cofirmer la supprission");
    if (delet) {
        voitures = voitures.filter(voiture => voiture.immatriculation !== matricul);
        display(voitures);

    } else if (!delet) {
        return;
    }
}
function Modifier_fun(id) {
    cheker = id
    voiture = voitures.find(voiture => voiture.id === Number(id));
    Marque.value = voiture.marque
    Modele.value = voiture.modele;
    matricul.value = voiture.immatriculation;
    catygorie.value = voiture.categorie;
    PrixJ.value = voiture.prixJour;
    statut.value = voiture.statut;
    annuler.hidden = false;
    AjoutBTn.textContent = "Cofirmer La Modification";


}


function recherche(input) {
    let datafelter = voitures.filter(voiture => {
      voiture.marque.toLowerCase().startsWith(input.toLowerCase()) ||
      voiture.modele.toLowerCase().startsWith(input.toLowerCase()) ||
      voiture.immatriculation.toLowerCase().startsWith(input.toLowerCase()) 
    
 } ) 

};
serch.addEventListener("input", (i) => {
    i.preventDefault();
    recherche(serch.value);
     display();


});