let container = document.getElementsByClassName("container")[0];

fetch("https://ergast.com/api/f1/2022.json")

    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        let container = document.getElementsByClassName("container")[0];

        for (let i = 0; i < data["MRData"]["RaceTable"]["Races"].length; i++){

            let divParent = document.createElement("div");
            divParent.setAttribute("class", "divParent");

            let divGp = document.createElement("div");
            divGp.setAttribute("class", "divGp");

            let flagGp = document.createElement("img");
            flagGp.setAttribute("class", "flagGp");
            flagGp.setAttribute("src", "image/" + i +".png");

            let pGp = document.createElement("p");
            pGp.setAttribute("class", "pGp");

            let chevron = document.createElement("img");
            chevron.setAttribute("class","chevron");
            chevron.setAttribute("src", "image/chevron.png");

            let pData = data["MRData"]["RaceTable"]["Races"][i]["raceName"];
            pGp.innerHTML = pData;
            
            // Affichage résultat
            let divInfo = document.createElement("div");
            divInfo.setAttribute("class", "divInfo");

            let pFirst = document.createElement("p");
            pFirst.setAttribute("class", "pFirst");

            // Affichage course à venir

            let pDate = document.createElement("p");
            pDate.setAttribute("class", "pDate");

            let pHeure = document.createElement("p");
            pHeure.setAttribute("class", "pHeure");



            divParent.addEventListener("click", () => {

                if(divParent.contains(divInfo)){
                    if(divInfo.contains(pFirst)){

                        divInfo.removeChild(pFirst);
                        divParent.removeChild(divInfo);
                    }else{
                        divInfo.removeChild(pDate);
                        divInfo.removeChild(pHeure);
                        divParent.removeChild(divInfo);
                    }
                } else{

                    divParent.appendChild(divInfo);

                    fetch("https://ergast.com/api/f1/2022/"+ (i+1) + "/results.json")
    
                    .then((res) => res.json())
                    .then((results) =>{
                        let lengthRace = results["MRData"]["RaceTable"]["Races"].length;
                        if(lengthRace > 0){
                            console.log(results)
                            let dataFirst = "1er : " + results["MRData"]["RaceTable"]["Races"]["0"]["Results"]["0"]["Driver"]["familyName"] + " " + results["MRData"]["RaceTable"]["Races"]["0"]["Results"]["0"]["Driver"]["givenName"];
    
                            pFirst.innerHTML = dataFirst;
    
                            divInfo.appendChild(pFirst);
                        } else {
                            fetch("https://ergast.com/api/f1/2022/"+ (i+1) + ".json")
    
                            .then((res) => res.json())
                            .then((results) =>{
                                console.log(results);

                                let dateJson = new Date(results["MRData"]["RaceTable"]["Races"]["0"]["date"]).toLocaleDateString('fr-FR', {   day: 'numeric', month: 'numeric', year: 'numeric', });
                                let dataDate = "Date de course : " + dateJson;

                                pDate.innerHTML = dataDate;

                                let heureJson = results["MRData"]["RaceTable"]["Races"]["0"]["time"];
                                let dataHeure = "Heure de la course : " + heureJson;

                                pHeure.innerHTML = dataHeure

                                divInfo.appendChild(pDate);
                                divInfo.appendChild(pHeure);
                            })
                        }

                    })
                }

            })

            container.appendChild(divParent);
                divParent.appendChild(divGp)
                divGp.appendChild(flagGp);
                divGp.appendChild(pGp);
                divParent.appendChild(chevron);
        }
    })