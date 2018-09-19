var imageA = document.getElementById("#imageA");
var imageIndex = 0;

let gameData = [
    {
        imageA: '../src/img/bey.jpg',
        imageB: '../src/img/rihanna.jpg',
        votesA: 0,
        votesB: 0
    },
    {
        imageA: "../src/img/timber.jpg",
        imageB: "../src/img/bieb.jpg",
        votesA: 0,
        votesB: 0
    },
    {
        imageA: "../src/img/swift.jpeg",
        imageB: "../src/img/perry.jpg",
        votesA: 0,
        votesB: 0
    },
]

//displaying image A & image B

var imageDivA = document.getElementById("imageA");
var imageDivB = document.getElementById("imageB");

var firstImageA = document.createElement('img');
var firstImageB = document.createElement('img');

firstImageA.setAttribute("src", gameData[0].imageA);
firstImageB.setAttribute("src", gameData[0].imageB);


imageDivA.appendChild(firstImageA);
imageDivB.appendChild(firstImageB);


const voteA = document.querySelector('#votea')
const voteB = document.querySelector('#voteb')

voteA.addEventListener('click', function(){
	gameData[imageIndex].votesA++;
	imageIndex++
	firstImageA.setAttribute("src", gameData[imageIndex].imageA);
	firstImageB.setAttribute("src", gameData[imageIndex].imageB);
    //transition code goes here
})

voteB.addEventListener('click', function(){
	gameData[imageIndex].votesB++;
	imageIndex++
		firstImageA.setAttribute("src", gameData[imageIndex].imageA);
	firstImageB.setAttribute("src", gameData[imageIndex].imageB);
	 //transition code goes here
})


// loop end

// // this saves an item to the browser 
// localStorage.setItem('gameData', gameData);
//

// localStorage.setItem('gameData', JSON.stringify(gameData));
// // this gets an item
// var gameData = localStorage.getItem('gameData')
// // if you have to use line 4 use this instead
// var gameData = JSON.parse(localStorage.getItem('gameData'))

// // final step keep in mind that you can't just reset game data because this may be the first time they load the page so the real final output would be
// if(localStorage.getItem('gameData')) {
// 	var gameData = localStorage.getItem('gameData')
// 	// or line 8 depending
// }

 



    
//     // var createImageTag = document.createElement('img');
//     var imageDivA = document.querySelector("#imageA");
//     var firstImageA = gameData[i].imageDivA;
// 	document.firstImageA.appendChild(imageDivA);
// }




// function allImages() {
//     if (imageIndex >= gameData.length) {
//         imageIndex = i;
//     } else {
//         imageIndex++
//     }

//     imageA.src = gameData[imageIndex];
  
//    setInterval(imageA, 3000);
// }
  
// allImages();

// const voteA = document.querySelector('#votea')
// const voteB = document.querySelector('#voteb')

// voteA.addEventListener('click', function(){

// })

// voteB.addEventListener('click', function(){

// })


//loop the images 


// function allImages() {
//     if (imageIndex >= gameData.length) {
//         imageIndex = i;
//     } else {
//         imageIndex++
//     }
    
//     imageA.src = gameData[imageIndex];
  
//    setInterval(imageA, 3000);
// }
  
// allImages();










// for (var i = 0; i < gameData.length; i++){
//     console.log(gameData[i].imageA);
// }

// var i = 0;

// while (i < gameData.length);
// {
//     document.images[0].src = gameData[i];
//     i++;
// }






// show one comparison at a time
// show each comparison for 30 seconds
// tapping/clicking on an image adds a vote for that one
// after each round, it moves on to the next round
// after the last round it shows a winner screen indefinitely

// show the images in array
// show the first set of images in gameData
// create the first set of images in gameData, put them in the body
// create 2 images, get their srcs from gameData, put them in the body






