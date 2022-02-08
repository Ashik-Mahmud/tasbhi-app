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
    }
    audio.onplaying = () => {
        buttons[0].classList.add('disabled')
    }
    audio.onended = () =>{
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