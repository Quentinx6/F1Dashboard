document.addEventListener("DOMContentLoaded", () => {
    fetch("https://ergast.com/api/f1/2023.json")

    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
    })
})