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
        imageA: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjhmPDsiZXdAhVFmuAKHRarCTcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pepsi.com%2F&psig=AOvVaw1ovzbEiwnP0Zsvs1WIRZ0t&ust=1535728828218031",
        imageB: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwizlIf1iZXdAhUkiOAKHT-WCaIQjRx6BAgBEAU&url=http%3A%2F%2Fgogrocerchicago.com%2Fgocatering%2Fproduct%2Fcoke-diet-coke-sprite-coke-zero%2F&psig=AOvVaw2lUinBqYT2XqW77j09hopI&ust=1535728843119651",
        votesA: 0,
        votesB: 0
    },
    {
        imageA: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiLrOCGipXdAhVmTd8KHZsWBeUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.grammy.com%2Fgrammys%2Fartists%2Fbeyonc%25C3%25A9-knowles&psig=AOvVaw0evsU_HqXbQGooVQ4QHqVH&ust=1535728883402580",
        imageB: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjC2JWPipXdAhUSmuAKHQ3mDjYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hotnewhiphop.com%2Frihanna-is-all-smiles-in-rare-family-photo-with-mom-and-dad-news.58390.html&psig=AOvVaw2teTtrHWzCuj4kghubjCQG&ust=1535728895469256",
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






