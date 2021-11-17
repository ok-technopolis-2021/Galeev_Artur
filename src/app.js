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

function toElement(name, progress) {
    let newSkillDiv = document.createElement('div');
    newSkillDiv.classList.add('skills-list_skill');
    newSkillDiv.innerHTML =
        '                       <section class="skill-left">' +
        '                            <div class="skill-left_name">' +
        '                                ' + name.toString() +
        '                            </div>' +
        '                            <div class="skill-left_progress">' +
        '                                <div class="skill_bar" style="width:' + progress.toString() + '%"></div>' +
        '                            </div>' +
        '                        </section>' +
        '                        <section class="skill-right">' +
        '                            <div class="skill-right_delete">' +
        '                                <img class="skill-right_delete_img" src="assets/minus-light.png" alt="h">' +
        '                            </div>' +
        '                        </section>'
    ;
    let img = newSkillDiv.getElementsByClassName("skill-right_delete_img").item(0);
    img.addEventListener('click', () => {
        newSkillDiv.remove();
    })
    return newSkillDiv;
}


var list = document.getElementById('skills_list');
var applyBtn = document.getElementById("apply-button");
var nameField = document.getElementById("name");
var numberField = document.getElementById("number");

// Example
list.appendChild(toElement('JAVA', 90));
list.appendChild(toElement('C++', 60));

applyBtn.addEventListener('click', () => {
    if (!(nameField.value === '') && !(numberField.value === '') ) {
        list.appendChild(toElement(nameField.value, numberField.value));
    }
})