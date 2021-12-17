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


const tmpl = document.getElementById('template');
const nameDiv = tmpl.content.querySelector('.skill-left_name');
const skillDiv = tmpl.content.querySelector('.skill_bar');

function toElement(name, progress) {
    nameDiv.textContent = name;
    skillDiv.style.width = progress + '%';

    let newSkillTemplate = tmpl.content.cloneNode(true);
    let img = newSkillTemplate.querySelector('.skill-right_delete_img');
    let newSkillDiv = newSkillTemplate.querySelector('.skills-list_skill');
    img.addEventListener('click', () => {

        newSkillDiv.remove();
    })
    return newSkillTemplate;
}

let list;
document.addEventListener("DOMContentLoaded", function (event) {
    list = document.getElementById('skills_list');
});

// Example
list.appendChild(toElement('JAVA', 90));
list.appendChild(toElement('C++', 60));

let form;
document.addEventListener("DOMContentLoaded", function (event) {
    form = document.getElementById('formElem');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = form.querySelector('[name="nameField"]'),
        numberField = form.querySelector('[name="numberField"]');
    if (!(nameField.value === '') && !(numberField.value === '')) {
        list.appendChild(toElement(nameField.value, numberField.value));
    }
});