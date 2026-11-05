import { voituresInitiales } from "./data.js";


// console.log(etape_1);

const config = {
  voitures: [
    {
      id: 1,
      marque: "Dacia",
      modele: "Sandero",
      immatriculation: "AUTO-001",
      categorie: "Citadine",
      prixJour: 250,
      statut: "Disponible",
    },
    {
      id: 2,
      marque: "Renault",
      modele: "Clio",
      immatriculation: "AUTO-002",
      categorie: "Citadine",
      prixJour: 300,
      statut: "Disponible",
    },
    {
      id: 3,
      marque: "Dacia",
      modele: "Duster",
      immatriculation: "AUTO-003",
      categorie: "SUV",
      prixJour: 450,
      statut: "Disponible",
    },
  ],

  modesRecuperation: [
    { id: "agence", nom: "Ã€ lâ€™agence", fraisFixes: 0 },
    { id: "aeroport", nom: "Ã€ lâ€™aÃ©roport", fraisFixes: 150 },
    { id: "adresse", nom: "Ã€ une adresse", fraisFixes: 100 },
  ],

  agences: ["Casablanca â€” Centre-ville", "Rabat â€” Agdal", "Marrakech â€” GuÃ©liz"],

  aeroports: ["Casablanca â€” Mohammed V", "Rabat â€” SalÃ©", "Marrakech â€” MÃ©nara"],

  options: [
    { id: "siegeBebe", nom: "SiÃ¨ge bÃ©bÃ©", prixParJour: 30 },
    {
      id: "conducteurSupplementaire",
      nom: "Conducteur supplÃ©mentaire",
      prixParJour: 200,
    },
  ],
};

// 2. SÃ‰LECTION : les choix de l'utilisateur, Ã  actualiser avec les formulaires.
// Les identifiants correspondent aux id dÃ©finis dans config.
// Les dates seront des chaÃ®nes au format AAAA-MM-JJ (valeur d'un input date).z
const selectedConfig = {
  etape: 1,
  voitureId: null,
  dateDebut: "",
  dateFin: "",
  modeRecuperation: "agence",

  recuperation: {
    // Mode agence uniquement.
    heureRecuperation: "",

    // Mode aeroport uniquement.
    aeroport: "",
    numeroVol: "",
    heureArrivee: "",

    // Mode adresse uniquement.
    ville: "",
    adresse: "",
    heureLivraison: "",
  },

  options: {
    siegeBebe: false,
    conducteurSupplementaire: false,
  },
};



const liste_cartes = document.getElementById("liste-cartes");


const etape_1 = document.getElementById("etape-1")
const etape_2 = document.getElementById("etape-2")
const etape_3 = document.getElementById("etape-3")


const button_1 = document.getElementById("button-1")
const button_2 = document.getElementById("button-2")


const validation_Etape1 = document.getElementById("validationEtape1");
const validation_Etape2 = document.getElementById("validationEtape2");
const validation_Etape3 = document.getElementById("validationEtape3");
const validation_Etape4 = document.getElementById("validationEtape4");



const date_Input = document.getElementById("dateInput");



etapes();


affichier(config.voitures);


function affichier(Car_voiture) {

  liste_cartes.textContent = "";
  Car_voiture.forEach(car => {

    const label = document.createElement("label");
    const div1 = document.createElement("div");
    const p1 = document.createElement("p");
    const input1 = document.createElement("input");
    const div2 = document.createElement("div");
    const h2 = document.createElement("h2")
    const pp = document.createElement("p");
    const h3 = document.createElement("h3");



    label.setAttribute("class", "flex flex-col gap-4 p-4  m-4 border-3 border-gray-200 rounded-[10px]")

    div1.setAttribute("class", "flex justify-between items-center ");
    label.appendChild(div1);

    p1.setAttribute("class", "text-sky-300 w-fit px-3 py-1 rounded-[10px]  bg-indigo-500");
    p1.textContent = car.categorie;
    div1.appendChild(p1);


    input1.setAttribute("class", "!w-4")

    div1.appendChild(input1);


    div2.setAttribute("class", "flex flex-col gap-2");
    label.appendChild(div2);


    h2.setAttribute("class", "font-bold ")
    h2.textContent = car.marque + " " + car.modele;
    div2.appendChild(h2);



    pp.setAttribute("class", "text-green-600 ")
    pp.textContent = car.statut;
    div2.appendChild(pp);




    h3.setAttribute("class", "font-bold ")
    h3.textContent = car.prixJour + " MAD / jour";
    div2.appendChild(h3);


    liste_cartes.appendChild(label);

  })

}

function sauvgarderLocal() {
  localStorage.setItem("data", JSON.stringify(config.voitures))

}
function chargerProduits() {
  if (!localStorage.getItem("data"))
    config.voitures = JSON.parse(localStorage.getItem("data"));
}



function etapes() {
  if (selectedConfig.etape == 1) {
    etape_1.hidden = false;
    etape_2.hidden = true;
    etape_3.hidden = true;
    button_1.textContent = "Recommencer"

    validation_Etape1.textContent = "1";
    validation_Etape2.textContent = "2";
    validation_Etape3.textContent = "3";
    validation_Etape4.textContent = "4";
    validation_Etape2.classList.remove("bg-blue-700")
    validation_Etape2.classList.add("bg-slate-200")
  }
  else if (selectedConfig.etape == 2) {
    etape_1.hidden = true;
    etape_2.hidden = false;
    etape_3.hidden = true;
    button_1.textContent = "Précédent"

    validation_Etape1.textContent = "✓";
    validation_Etape2.textContent = "2";
    validation_Etape3.classList.remove("bg-blue-700")
    validation_Etape3.classList.add("bg-slate-200")
    validation_Etape2.classList.remove("bg-slate-200")
    validation_Etape2.classList.add("bg-blue-700")
    validation_Etape3.textContent = "3";
    validation_Etape4.textContent = "4";

  }
  else if (selectedConfig.etape == 3) {
    etape_1.hidden = true;
    etape_2.hidden = true;
    etape_3.hidden = false;
    button_1.textContent = "Précédent"

    validation_Etape1.textContent = "✓";
    validation_Etape2.textContent = "✓";
    validation_Etape3.textContent = "3";
    validation_Etape4.textContent = "4";
        validation_Etape3.classList.remove("bg-slate-200")
    validation_Etape3.classList.add("bg-blue-700")


  }
}


button_1.addEventListener("click", (e) => {
  e.preventDefault();
   
  if (selectedConfig.etape > 1) {
    selectedConfig.etape--;
  }
  etapes();
});


button_2.addEventListener("click", (e) => {
  e.preventDefault();
 
  if (selectedConfig.etape < 3) {
    selectedConfig.etape++;
  }
  etapes();
});
