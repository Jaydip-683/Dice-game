// Player 1 Random Number Generator //


var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice"+ randomNumber1 + ".png"; // dice1.pmg - dice6.png

var randomImageSource = "img/" + randomDiceImage; //images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Player 2 Random Number Generator //


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "img/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// If Player 1 Wins

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = " 🏆 Player 1 Wins!";
}

// If Player 2 Wins

else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = " 🏆 Player 2 Wins!";
}

// If its Draw

else 
{
    document.querySelector("h1").innerHTML = " 😟 Its Draw "
}
