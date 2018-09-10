var imageA = document.getElementById("#imageA");
var imageIndex = 0;

let gameData = [
    {
        imageA: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQsoLZiZXdAhWQNd8KHQ98AJUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fworld-us-canada-42808521&psig=AOvVaw3BVbEpQOJSai2hUGd0e9Iw&ust=1535728788141158",
        imageB: "https://i.kym-cdn.com/entries/icons/mobile/000/005/608/nyan-cat-01-625x450.jpg",
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

// function changeImage() {
//   imageA.setAttribute("url",gameData[imageIndex]);
//   imageIndex = (imageIndex + 1) % gameData.length;
// }

// setInterval(changeImage, 5000);




for (var i = 0; i < gameData.length; i++) {
    console.log( gameData[i].imageA)
    
    // var createImageTag = document.createElement('img');
    var imageDivA = document.querySelector("#imageA");
    var firstImageA = gameData[i].imageDivA;
	document.firstImageA.appendChild(imageDivA);
}

// for (var i = 0; i < gameData.length; i++){
//     console.log(gameData[i].imageA);

//     var imageA = document.getElementById('imageA');
//     img.src = imageA[0];
//     document.body.appendChild(imageA);
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







// var interval = setInterval(doStuff, 2000); // 2000 ms = start after 2sec 
// function doStuff() {
//   alert('this is a 2 second warning');
//   clearInterval(interval);
// }