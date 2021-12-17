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
const skillDiv = tmpl.content.querySelector('.skill-left_progress');

function toElement(name, progress) {
    // let newSkillDiv = document.createElement('div');
    // newSkillDiv.classList.add('skills-list_skill');
    // newSkillDiv.innerHTML =
    //     '                       <section class="skill-left">' +
    //     '                            <div class="skill-left_name">' +
    //     '                                ' + name +
    //     '                            </div>' +
    //     '                            <div class="skill-left_progress">' +
    //     '                                <div class="skill_bar" style="width:' + progress + '%"></div>' +
    //     '                            </div>' +
    //     '                        </section>' +
    //     '                        <section class="skill-right">' +
    //     '                            <div class="skill-right_delete">' +
    //     '                                <img class="skill-right_delete_img" src="assets/minus-light.png" alt="h">' +
    //     '                            </div>' +
    //     '                        </section>'
    // ;

    nameDiv.textContent = name;
    skillDiv.style.width = progress + '%';

    let newSkillDiv = tmpl.content.cloneNode(true);

    let img = newSkillDiv.querySelector('.skill-right_delete_img');
    img.addEventListener('click', () => {
        newSkillDiv.remove();
    })
    return newSkillDiv;
}


const list = document.getElementById('skills_list');
// var applyBtn = document.getElementById("apply-button");
// var nameField = document.getElementById("name");
// var numberField = document.getElementById("number");

// Example
list.appendChild(toElement('JAVA', 90));
list.appendChild(toElement('C++', 60));

// applyBtn.addEventListener('click', () => {
//     if (!(nameField.value === '') && !(numberField.value === '') ) {
//         list.appendChild(toElement(nameField.value, numberField.value));
//     }
// })

const form = document.getElementById('formElem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = form.querySelector('[name="nameField"]'),
        numberField = form.querySelector('[name="numberField"]');
    if (!(nameField.value === '') && !(numberField.value === '') ) {
        list.appendChild(toElement(nameField.value, numberField.value));
    }
});