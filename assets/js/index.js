/* 1. Selection & Work with Count Tasbhi */
const buttons = document.querySelectorAll('.btn-group button');
const counter = document.querySelector('.count');
const audio = document.getElementById('audio');

let count = 0;
buttons[0].addEventListener('click', () => {
    count++;
    buttons[1].classList.remove('disabled')
    showCount();
    if (count >= 100) {
        buttons[0].classList.add('disabled')
        count = 0;
    }
    audio.onplaying = () => {
        buttons[0].classList.add('disabled')
    }
    audio.onended = () => {
        buttons[0].classList.remove('disabled')
    }
    audio.play();

})
buttons[1].addEventListener('click', () => {
    count = 0;
    showCount();

})

function showCount() {
    counter.innerText = count;
}


/* 2. Work with Settings  */
const settingWrapper = document.querySelector(".settings-wrapper"),
    settingsButton = document.querySelector('.settings');

settingsButton.addEventListener("click", function () {
    settingWrapper.classList.toggle('active');
    if (settingWrapper.classList.contains('active')) {
        settingsButton.querySelector('span').innerHTML = '&times;';
    }else{
        settingsButton.querySelector('span').innerHTML = '&#9881;';
    }
})


/* 3. Change Dua Functions  */
const duaSelector = document.querySelector("#change-dua");
duaSelector.addEventListener("change",function(event){
    let value = event.target.value;
    audio.src = `./assets/media/${value}`;
    settingWrapper.classList.remove('active');
    settingsButton.querySelector("span").innerHTML = '&#9881;';
    count = 0;
    counter.innerText = '0';
    
})

/* 4. Change Theme Colors  */

const themeColor = document.querySelector("#theme-color");
themeColor.addEventListener('change',function(event){
    let value = event.target.value;
    document.body.style.backgroundColor = value;
    settingsButton.style.backgroundColor = value;
    counter.style.backgroundColor = value;
    buttons[0].style.backgroundColor = value;
    buttons[1].style.backgroundColor = value;
    duaSelector.style.borderColor = value;

})