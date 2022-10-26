const img1 = document.querySelector("#milan");
img1.addEventListener("mouseover", (event) => {
    let paragraph = document.createElement("p");
    let altText = document.createTextNode("milan, 2022");
    paragraph.setAttribute("class","altText");
    paragraph.setAttribute("style","visibility: visible;")
    paragraph.appendChild(altText);
    document.querySelector(".photo1").appendChild(paragraph);
})

img1.addEventListener("mouseout", (event) => {
    let paragraph = document.createElement("p");
    let altText = document.createTextNode("milan, 2022");
    paragraph.setAttribute("class","altText");
    paragraph.appendChild(altText);
    document.querySelector(".photo1").appendChild(paragraph);
})