const Btnplay = document.querySelector('.btnplay');
const Windov = document.querySelector(".windov")
const Rock = document.querySelector(".rock")
const Scissors = document.querySelector(".scissors")
const Paper = document.querySelector(".paper")
const Card2 = document.querySelector('.card2');
const Card3 = document.querySelector('.card3');
// const Result = document.querySelect('.result');
// const Compyuter = document.querySelector('.compyuter');
Btnplay.addEventListener("click", () => {
    Windov.classList.toggle("active")
})
let data = [
    {
        rock:"./img/tosh.png"
    },
    {
        scissors:"./img/Qaychi.png"
    },
    {
        paper:"./img/Qogoz.png"
    }
]

Rock.addEventListener("click", () => {
    alert("Ishonchingiz komilmi?")
    let a = Math.round(Math.random() * (data.length - 1))
    console.log(data[a]);
    if (data[a].rock) {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/tosh.png" alt=""></span>
                        VS
                        <span><img src="${data[a].rock}" alt=""></span>
                    </div>
                    <h2>Draw</h2>
        `
        Card3.innerHTML = `
    <span><img src="${data[a].rock}" alt=""></span>
    `
    } else if (data[a].paper) {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/tosh.png" alt=""></span>
                        VS
                        <span><img src="${data[a].paper}" alt=""></span>
                    </div>
                    <h2>Game Over</h2>
        `
        Card3.innerHTML = `
    <span><img src="${data[a].paper}" alt=""></span>
    `
    } else {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/tosh.png" alt=""></span>
                        VS
                        <span><img src="${data[a].scissors}" alt=""></span>
                    </div>
                    <h2>You Win</h2>`
        Card3.innerHTML = `
    <span><img src="${data[a].scissors}" alt=""></span>
    `
    }
})
Paper.addEventListener("click", () => {
    alert("Ishonchingiz komilmi?")
    let a = Math.round(Math.random() * (data.length - 1))
    console.log(data[a]);
    if (data[a].rock) {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/Qogoz.png" alt=""></span>
                        VS
                        <span><img src="${data[a].rock}" alt=""></span>
                    </div>
                    <h2>You Win</h2>
        `
        Card3.innerHTML = `
    <span><img src="${data[a].rock}" alt=""></span>
    `
    } else if (data[a].paper) {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/Qogoz.png" alt=""></span>
                        VS
                        <span><img src="${data[a].paper}" alt=""></span>
                    </div>
                    <h2>Draw</h2>
        `
        Card3.innerHTML = `
    <span><img src="${data[a].paper}" alt=""></span>
    `
    } else {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/Qogoz.png" alt=""></span>
                        VS
                        <span><img src="${data[a].scissors}" alt=""></span>
                    </div>
                    <h2>Game Over</h2>`
        Card3.innerHTML = `
    <span><img src="${data[a].scissors}" alt=""></span>
    `
    }
})
Scissors.addEventListener("click", () => {
    alert("Ishonchingiz komilmi?")
    let a = Math.round(Math.random() * (data.length - 1))
    console.log(data[a]);
    if (data[a].rock) {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/Qaychi.png" alt=""></span>
                        VS
                        <span><img src="${data[a].rock}" alt=""></span>
                    </div>
                    <h2>Game Over</h2>
        `
        Card3.innerHTML = `
    <span><img src="${data[a].rock}" alt=""></span>
    `
    } else if (data[a].paper) {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/Qaychi.png" alt=""></span>
                        VS
                        <span><img src="${data[a].paper}" alt=""></span>
                    </div>
                    <h2>You Win</h2>
        `
        Card3.innerHTML = `
    <span><img src="${data[a].paper}" alt=""></span>
    `
    } else {
        Card2.innerHTML = `
        <div class="image">
                        <span><img src="./img/Qaychi.png" alt=""></span>
                        VS
                        <span><img src="${data[a].scissors}" alt=""></span>
                    </div>
                    <h2>Draw</h2>`
        Card3.innerHTML = `
    <span><img src="${data[a].scissors}" alt=""></span>
    `
    }
})