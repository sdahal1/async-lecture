
let greetings = [
    "Hello",
    "Hey",
    "Hai",
    "hiii",
    "heyy",
    "heyyyy",
    "who dis"
]



let randomFortune = [
    "You got this!",
    "You out cheya!",
    "Stay humble tho",
    "Stop playing too much",
    "Be real with me",
    "Consult with your pet"
]



let bye = [
    "bye",
    "peace",
    "1 time",
    "see ya",
    "adios",
    "you take care now",
    "alright now"
]

let greetingsCol= document.querySelector(".left");
let middleCol= document.querySelector(".middle");
let rightCol= document.querySelector(".right");



function greet(){
    // setTimeout(()=>{
        console.log("in greeting function")
        let ol= document.createElement("ol");
        greetings.forEach(greeting=>{
            let li= document.createElement("li");
            li.innerText = `${greeting}`
            greetingsCol.appendChild(li);
            
        })
    // },2400)
}

function randomFortuneMiddle(){
    // setTimeout(() => {
        console.log("in randomFortune function")
        let h3Tag = document.createElement("h4");
        let random = randomFortune[Math.floor(Math.random()*randomFortune.length)]
        h3Tag.innerText = random;
        middleCol.appendChild(h3Tag)
       
    // }, 2000);
}


function sayBye(){
    // setTimeout(()=>{
        console.log("in sayBye function")
        let ol= document.createElement("ol");
        bye.forEach(msg=>{
            let li= document.createElement("li");
            li.innerText = `${msg}`
            rightCol.appendChild(li);
        })
    // }, 1000)
}

function getCoins(){
    console.log("Getting coins function")
    return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response=>{
            console.log("response")
            return response.data
        })
}


function paintCoinsToWindow(coins){
    console.log(coins)
        let ul = document.createElement("ul")
        coins.forEach(coinObj=>{
            let li = document.createElement("li");
            li.innerText = `${coinObj.name}- $${coinObj.current_price}`
            ul.appendChild(li)
        })
    allCoinsDiv.appendChild(ul);
    return "huh"
}


let allCoinsDiv = document.querySelector("#all-coins")
getCoins()
    .then(paintCoinsToWindow)
    .then(msg=>msg)
greet()
randomFortuneMiddle()
sayBye()

