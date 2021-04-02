// Create variables targetting the relevant DOM elements here 👇

var bookCover = document.querySelector(".cover-image");
var bookTitle = document.querySelector(".cover-title");
var bookTagline1 = document.querySelector(".tagline-1");
var bookTagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeCoverButton = document.querySelector(".make-new-button");
var form = document.querySelector(".form-view");
var homeView = document.querySelector(".home-view");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var saveCoverPage = document.querySelector(".saved-view");
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var userDescriptor1 = document.querySelector(".user-desc1");
var userDescriptor2 = document.querySelector(".user-desc2");
var createNewBookButton = document.querySelector(".create-new-book-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

changeCover();

randomCoverButton.addEventListener("click", changeCover);
makeCoverButton.addEventListener("click", makeCoverView);
viewSavedButton.addEventListener("click", savedCoverView);
homeButton.addEventListener("click", homePageView);
//create an event listener on the Save Cover button
createNewBookButton.addEventListener("click", function() {
  createNewBook();
  event.preventDefault();
});

// Create your event handlers and other functions here 👇

function changeCover() {
  var coverIndex = getRandomIndex(covers);
  var newCover = covers[coverIndex];
  var titleIndex = getRandomIndex(titles);
  var newTitle = titles[titleIndex];
  var descriptorIndex1 = getRandomIndex(descriptors);
  var newDescriptor1 = descriptors[descriptorIndex1];
  var descriptorIndex2 = getRandomIndex(descriptors);
  var newDescriptor2 = descriptors[descriptorIndex2];
  //note: for refactoring, include if/else that prevents descriptors from being the same word
  bookCover.src = newCover;
  bookTitle.innerText = newTitle;
  bookTagline1.innerText = newDescriptor1;
  bookTagline2.innerText = newDescriptor2;
  currentCover = new Cover(newCover, newTitle, newDescriptor1, newDescriptor2);
  return currentCover;
}

//note- for refactoring, toggle visibility with single function that takes parameter?

function makeCoverView(){
 homeButton.classList.remove("hidden");
 saveCoverButton.classList.add("hidden");
 randomCoverButton.classList.add("hidden");
 form.classList.remove("hidden");
 homeView.classList.add("hidden");
 saveCoverPage.classList.add("hidden");
}

function savedCoverView(){
  homeButton.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  saveCoverPage.classList.remove("hidden");
  homeView.classList.add("hidden");
  form.classList.add("hidden");
}

function homePageView(){
  homeButton.classList.add("hidden");
  saveCoverButton.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  homeView.classList.remove("hidden");
  saveCoverPage.classList.add("hidden");
  form.classList.add("hidden");
}

//create a function that will take the value of each input form and save it to an array, create a new Cover, and display that cover
function createNewBook() {
  //take each value of each input form and save it
  var inputCover = userCover.value;
  var inputTitle = userTitle.value;
  var inputDesc1 = userDescriptor1.value;
  var inputDesc2 = userDescriptor2.value;
  covers.push(inputCover);
  titles.push(inputTitle);
  descriptors.push(inputDesc1);
  descriptors.push(inputDesc2);
  currentCover = new Cover(inputCover, inputTitle, inputDesc1, inputDesc2);
  bookCover.src = inputCover;
  bookTitle.innerText = inputTitle;
  bookTagline1.innerText = inputDesc1;
  bookTagline2.innerText = inputDesc2;
  homePageView();
  return currentCover;
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
