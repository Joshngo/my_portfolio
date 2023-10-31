sayHello();

//Session storage and local storage to save theme data.
let currentTheme = sessionStorage.getItem("currentTheme");
let currentThemeLocal = localStorage.getItem("currentTheme") 

//Set the theme for returning users.
if (currentThemeLocal != null) {
    setTheme(currentThemeLocal);
} else {
    setTheme("default")
} 

//Redirect to my linkedin.
$("#linkedin").on("click", function() {
    console.log("Going to Joshua's Linked in!")
    window.open("https://www.linkedin.com/in/joshua-ngo/")
})

$("#linkedin2").on("click", function() {
    console.log("Going to Joshua's Linked in!")
    window.open("https://www.linkedin.com/in/joshua-ngo/")
})

//Redirect to my github
$("#github").on("click", function() {
    console.log("Going to Joshua's Github.")
    window.open("https://github.com/Joshngo")
})

// $("#email").on("click", copyEmail());

//Open the chatroom project page.
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
//Depending on what is clicked, it will send that theme to the 
//setTheme method.
let themeButtons = $(".theme-button");

for (var i = 0; themeButtons.length > i; i++) {
    let themeClicked = themeButtons[i].dataset.mode;
    themeButtons[i].addEventListener('click', function() {
        console.log("Option Clicked", themeClicked);
        setTheme(themeClicked);
    })
};

//Set the theme based on what is passed in. Only 4 possible types.
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

// Unused function -> Clipboard permissions differ for each browser.
function copyEmail() {
    navigator.clipboard.writeText("joshua.ngo710@gmail.com");
    console.log("Email copied to clipboard.")
}

//Testing to see if the script works
function sayHello() {
    console.log("hellow world.")
}