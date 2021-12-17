document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("switch-theme").addEventListener('click', switchTheme);
});

function switchTheme() {
    let bodyCardClassList = document.body.classList;
    bodyCardClassList.toggle("dark-theme");
    bodyCardClassList.toggle("light-theme");
}