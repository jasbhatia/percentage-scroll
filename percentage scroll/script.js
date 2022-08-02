var fullHeight = document.documentElement.scrollHeight;

var scrollText = document.querySelector('.scroll');


var main = document.querySelector('.main-container');
console.log(main);

var divHeight = main.getBoundingClientRect().bottom - main.getBoundingClientRect().top;
console.log(divHeight);
var winHeight = window.innerHeight;

var scrollHeight = divHeight - winHeight;



window.addEventListener("scroll", function() {
    var offset = window.pageYOffset;



    let percentage = Math.round((offset / scrollHeight) * 100);
    // console.log(percentage);

    scrollText.textContent = percentage + "% Viewed";

});