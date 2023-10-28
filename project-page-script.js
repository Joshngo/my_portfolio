sayHello();

let theme = sessionStorage.getItem("currentTheme");
console.log(theme)
setTheme(theme)

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
}

function sayHello() {
    console.log("HELLO WORLD. PROJECT PAGE.")
}