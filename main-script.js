sayHello();

let currentTheme = sessionStorage.getItem("currentTheme");
let currentThemeLocal = localStorage.getItem("currentTheme") 

if (currentThemeLocal != null) {
    setTheme(currentThemeLocal);
} else {
    setTheme("default")
} 

$("#linkedin").on("click", function() {
    console.log("Going to Joshua's Linked in!")
    window.open("https://www.linkedin.com/in/joshua-ngo/")
})

$("#chatroom-readmore").on("click", function() {
    console.log("Heard.")
    window.open("chatroom-project.html");
});

//Use jquery animation to scroll smoothly to certain sections.
$("#about-me-nav").on("click", function () {
    console.log("Scrolling down.");
    $('html, body').animate({scrollTop: $("#about-me-header").offset().top -150},'slow');
});

$("#portfolio-nav").on("click", function () {
    console.log("Scrolling down.");
    $('html, body').animate({scrollTop: $("#portfolio-header").offset().top - 150},'slow');
});

$("#contact-nav").on("click", function () {
    console.log("Scrolling down.");
    $('html, body').animate({scrollTop: $("#contact-header").offset().top - 150},'slow');
});


//Use jquery to set up the theme dot functionality.
let themeButtons = $(".theme-button");

for (var i = 0; themeButtons.length > i; i++) {
    let themeClicked = themeButtons[i].dataset.mode;
    themeButtons[i].addEventListener('click', function() {
        console.log("Option Clicked", themeClicked);
        setTheme(themeClicked);
    })
};

function setTheme(theme) {
    if (theme == "default") {
        $("#color-theme").attr("href", "default.css")
        console.log("Changingto", theme)
    }

    if (theme == "light") {
        $("#color-theme").attr("href", "light.css")
        console.log("Changingto", theme)
    }

    if (theme == "blue") {
        $("#color-theme").attr("href", "blue.css")
        console.log("Changingto", theme)
    }

    if (theme == "red") {
        $("#color-theme").attr("href", "red.css")
        console.log("Changing to", theme)
    }

    localStorage.setItem("currentTheme", theme)
    sessionStorage.setItem("currentTheme", theme)
}

function sayHello() {
    console.log("hellow world.")
}