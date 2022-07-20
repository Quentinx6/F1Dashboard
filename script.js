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
            
            let divInfo = document.createElement("div");
            divInfo.setAttribute("class", "divInfo");
            divParent.addEventListener("click", () => {

                if(divParent.contains(divInfo)){
                    divParent.removeChild(divInfo);
                } else{
                    divParent.appendChild(divInfo);
                    
                    fetch("https://ergast.com/api/f1/2022/"+ (i+1) + "/results.json")
    
                    .then((res) => res.json())
                    .then((results) =>{
                        console.log(results)
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