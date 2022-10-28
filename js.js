
for(let i=1; i<=12;i++){
    const img = document.querySelector(`#photos${i}`);
    const par = document.querySelector(`#altText${i}`);


    img.addEventListener("mouseover", function (e) {
        par.style.visibility = 'visible';
    });

    img.addEventListener("mouseout", function (e) {
        par.style.visibility = 'hidden';
    });

}