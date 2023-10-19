function generateRandomNumber() {

    let max = Math.floor(4);
    let min = Math.ceil(0);

   return Math.floor(Math.random() * (max - min) + min);

}

window.onload = function getCatchphrase() {

    let phrases = ["It's Shelf + Game!", "We copied Minecraft!", "You're a shame to your family!" , 
                    "Literally a shelf for your games"];

    let showPhrase = document.getElementById("catch").innerHTML = phrases[generateRandomNumber()];
}