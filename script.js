let container = document.getElementsByClassName("container")[0];

fetch("https://ergast.com/api/f1/2022.json")

    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        let container = document.getElementsByClassName("container")[0];
        // let div1 = document.createElement("div");
        // div1.setAttribute("class", "div1");

        // let titleData = data["MRData"]["RaceTable"]["Races"]["0"]["raceName"]
        // let titlePara = document.createElement("h1");

        for (let i = 0; i < data["MRData"]["RaceTable"]["Races"].length; i++){
            // console.log(data["MRData"]["RaceTable"]["Races"][i]["raceName"])
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
            container.appendChild(divParent);
                divParent.appendChild(divGp)
                divGp.appendChild(flagGp);
                divGp.appendChild(pGp);
                divParent.appendChild(chevron);
        }

        // titlePara.innerHTML = titleData

        // let circuitData = data["MRData"]["RaceTable"]["Races"]["0"]["Circuit"]["circuitName"]
        // let circuitPara = document.createElement("p");

        // circuitPara.innerHTML = circuitData

        // container.appendChild(div1);
        //     div1.appendChild(titlePara);

            // div1.appendChild(circuitPara);
            
    })