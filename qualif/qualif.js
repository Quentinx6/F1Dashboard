let container = document.getElementsByClassName("container")[0];

fetch("https://ergast.com/api/f1/2023.json")

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
            flagGp.setAttribute("src", "../image/" + data["MRData"]["RaceTable"]["Races"][i]["Circuit"]["circuitId"] + ".png");

            let pGp = document.createElement("p");
            pGp.setAttribute("class", "pGp");

            let chevron = document.createElement("img");
            chevron.setAttribute("class","chevron");
            chevron.setAttribute("src", "../image/chevron.png");

            let pData = data["MRData"]["RaceTable"]["Races"][i]["raceName"];
            pGp.innerHTML = pData;
            
            // Affichage résultat
            let divInfo = document.createElement("div");
            divInfo.setAttribute("class", "divInfo");

            let divPodium = document.createElement("div");
            divPodium.setAttribute("class", "divPodium");

            let pCourse = document.createElement("p");
            pCourse.setAttribute("class", "pCourse");

            let pFirst = document.createElement("p");
            pFirst.setAttribute("class", "pFirst");

            let pSecond = document.createElement("p");
            pSecond.setAttribute("class", "pSecond");

            let pTrois = document.createElement("p");
            pTrois.setAttribute("class", "pTrois");

            // Affichage course à venir

            let pDate = document.createElement("p");
            pDate.setAttribute("class", "pDate");

            let pHeure = document.createElement("p");
            pHeure.setAttribute("class", "pHeure");

            let divTime = document.createElement("div");
            divTime.setAttribute("class", "divTime");

            let pTime = document.createElement("p");
            pTime.setAttribute("class", "pTime");

            let pTimeOne = document.createElement("p");
            pTimeOne.setAttribute("class", "pTimeOne");

            let pTimeTwo = document.createElement("p");
            pTimeTwo.setAttribute("class", "pTimeTwo");

            let pTimeTree = document.createElement("p");
            pTimeTree.setAttribute("class", "pTimeTree");

            divParent.addEventListener("click", () => {

                if(divParent.contains(divInfo)){
                    if(divInfo.contains(pFirst)){

                        divPodium.removeChild(pCourse);
                        divPodium.removeChild(pFirst);
                        divPodium.removeChild(pSecond);
                        divPodium.removeChild(pTrois);
                        divInfo.removeChild(divPodium);
                        divTime.removeChild(pTime);
                        divTime.removeChild(pTimeOne);
                        divTime.removeChild(pTimeTwo);
                        divTime.removeChild(pTimeTree);
                        divInfo.removeChild(divTime);
                        divParent.removeChild(divInfo);
                        divInfo.removeAttribute("id", "divInfo");
                    }else{
                        divInfo.removeChild(pDate);
                        divInfo.removeChild(pHeure);
                        divParent.removeChild(divInfo);
                    }
                } else{

                    divParent.appendChild(divInfo);

                    fetch("https://ergast.com/api/f1/2023/"+ (i+1) + "/qualifying.json")
    
                    .then((res) => res.json())
                    .then((results) =>{
                        console.log(results)
                        let lengthRace = results["MRData"]["RaceTable"]["Races"].length;
                        if(lengthRace > 0){
                            let dataFirst = "🏆" + results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["0"]["Driver"]["givenName"] + " " + results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["0"]["Driver"]["familyName"];

                            let dataSecond = "🥈" + results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["1"]["Driver"]["givenName"] + " " + results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["1"]["Driver"]["familyName"];

                            let dataTrois = "🥉" + results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["2"]["Driver"]["givenName"] + " " + results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["2"]["Driver"]["familyName"];

                            let dataTimeOne = results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["0"]["Q3"];

                            let dataTimeTwo = results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["1"]["Q3"];

                            let dataTimeTree = results["MRData"]["RaceTable"]["Races"]["0"]["QualifyingResults"]["2"]["Q3"];
    
                            pCourse.innerHTML = "Podium :";
                            pFirst.innerHTML = dataFirst;
                            pSecond.innerHTML = dataSecond;
                            pTrois.innerHTML = dataTrois;
                            
                            pTime.innerHTML = "Temps :"
                            pTimeOne.innerHTML = dataTimeOne;
                            pTimeTwo.innerHTML = dataTimeTwo;
                            pTimeTree.innerHTML = dataTimeTree;

                            divInfo.appendChild(divPodium);
                                divPodium.appendChild(pCourse);
                                divPodium.appendChild(pFirst);
                                divPodium.appendChild(pSecond);
                                divPodium.appendChild(pTrois);
                            divInfo.appendChild(divTime);
                                divTime.appendChild(pTime);
                                divTime.appendChild(pTimeOne);
                                divTime.appendChild(pTimeTwo);
                                divTime.appendChild(pTimeTree);
                                divInfo.setAttribute("id", "divInfo");
                        } else {
                            fetch("https://ergast.com/api/f1/2023/"+ (i+1) + ".json")
    
                            .then((res) => res.json())
                            .then((results) =>{
                                console.log(results);

                                let dateJson = new Date(results["MRData"]["RaceTable"]["Races"]["0"]["date"]).toLocaleDateString('fr-FR', {   day: 'numeric', month: 'numeric', year: 'numeric', });
                                let dataDate = "Date de course : " + dateJson;

                                pDate.innerHTML = dataDate;

                                //let heureJson = new Date(results["MRData"]["RaceTable"]["Races"]["0"]["time"]).toLocaleTimeString();
                                let heureJson = new Date(results["MRData"]["RaceTable"]["Races"]["0"]["date"]+'T'+results["MRData"]["RaceTable"]["Races"]["0"]["time"]).getHours();

                                // var d = new Date('2015-03-04T00:00:00.000Z');
                                let dataHeure = "Heure de la course : " + heureJson + " Heures";

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

    // fetch("https://ergast.com/api/f1/2022/12/qualifying.json")

    // .then((res) => res.json())
    // .then((data)=>{
    //     console.log(data);
    // })

    // fetch("https://ergast.com/api/f1/2022/13/qualifying.json")

    // .then((res) => res.json())
    // .then((data)=>{
    //     console.log(data);
    // })