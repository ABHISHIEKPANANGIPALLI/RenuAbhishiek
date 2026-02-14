const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton(){
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random()*maxX);
    const randomY = Math.floor(Math.random()*maxY);
     
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover",moveButton);
noBtn.addEventListener("touchstart",function(e){
    e.preventDefault();
    moveButton();
});


yesBtn.addEventListener("click", () => {

    document.body.classList.add("bgImage");

    document.querySelector(".container").innerHTML = `
        <div style="color: #C2185B; margin-top:0% ; text-align:center">
        <h1>Umahhhhhh umahhhhhhh 🥰😘</h1>
        <h2>Renu Bangarammmmm ❤️</h2>
        <h2>I Love Youuu😘🩷🫶🏻❤️</h2>
    </div>
    `;

    document.querySelector(".button").style.display = "none";
});
