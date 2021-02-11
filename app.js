// Create a global variable: var health=100;

let guile = {
    name: "Guile",
    health: 100,
    hits: 0,
    items: [

    ]
}


let fullHealthimg = "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP0102-NPUP10008_00-AVASFIIGUILE0000/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=330&h=330";


let status = [
{
img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP0102-NPUP10008_00-AVASFIIGUILE0000/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=330&h=330"

},
{
img: "Guilewooped.PNG"

}

]

let items = {

potion: {name: 'potion',
modifier: 0,
description: 'heals 5 HP'},

armor: {name: 'armor',
modifier: -10,
description: 'reduces damage by 3'
},

sonicBoom: {name:'Sonic Boom',
modifier:  50,
description: 'Ruptures eardrums'}

}


let kickDamage = 10

let slapDamage = 1

let punchDamage = 5

let totalDamage = 0


let armorUses = false


let healthBar = document.getElementById("bar")

// Create a function: slap()


function update(){
    if(armorUses=true)

    let healthElement = document.getElementById("health");
    healthElement.innerText = `${guile.health}`;
    
    let namesElement = document.getElementById("names");
    namesElement.innerText = `${guile.name}`;
    
    let hitsElement = document.getElementById("hits");
    hitsElement.innerText = `${guile.hits}`;
    let imageElement = document.getElementById("image");

    let modifiersElement = document.getElementById("modifiers");
    modifiersElement.innerText = (`${addMods()}`)

     let damageElement = document.getElementById("damage");
    damageElement.innerText = (`${totalDamage}`)

    
    if(guile.health < 1){
        imageElement.src = status[1].img;
        let koElement = document.getElementById("ko")
        koElement.innerText="K.O"
    } else {
        imageElement.src = status[0].img
    }
   
}


function slap(){
    guile.hits++;
    totalDamage = slapDamage + addMods();
    guile.health = guile.health - slapDamage - addMods();
    healthBar.style.width = "50"
    update();
}

function punch(){
guile.health = guile.health- punchDamage -addMods();
guile.hits++;
totalDamage = totalDamage+punchDamage+addMods();
update();
}

function kick(){
guile.health = guile.health- kickDamage -addMods();
guile.hits++;
totalDamage = totalDamage+kickDamage+addMods();
update();
armorUses=false;
}


function giveArmor(){

guile.items.push(items.armor);
armorUses=true;
update();

}

function givesonicBoom(){

guile.items.push(items.sonicBoom);
update();
}

function givePotion(){

guile.items.push(items.potion);
guile.health += 5;
update();
}

function addMods()
{
    let modTotal = 0


for(let i = 0; i < guile.items.length; i++){
    modTotal += guile.items[i].modifier
} return modTotal
}


function reset(){
guile.health = 100;
guile.hits = 0;
guile.items=[];
totalDamage = 0;
update();
}



update() 