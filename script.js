let container = document.getElementsByClassName("container")[0];

fetch("https://ergast.com/api/f1/2022.json")

    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        let container = document.getElementsByClassName("container")[0];
        let div1 = document.createElement("div");
        div1.setAttribute("class", "div1");

        let titleData = data["MRData"]["RaceTable"]["Races"]["0"]["raceName"]
        let titlePara = document.createElement("h1");

        titlePara.innerHTML = titleData

        let circuitData = data["MRData"]["RaceTable"]["Races"]["0"]["Circuit"]["circuitName"]
        let circuitPara = document.createElement("p");

        circuitPara.innerHTML = circuitData

        container.appendChild(div1);
            div1.appendChild(titlePara);
            div1.appendChild(circuitPara);
            
    })