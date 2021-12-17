// Если нужен такого рода импорт, придется поставить rollup scss plugin
// В остальных случаях все стили подтянет gulp, просто по маске  src/styles/**/*.less и скомпилирует их в единый css файл
// import './styles/layout.scss';

function changeTheme() {
    let bodyCardClassList = document.querySelector("body").classList;
    bodyCardClassList.toggle("dark-theme");
    bodyCardClassList.toggle("light-theme");
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.body.addEventListener('click', changeTheme);
});