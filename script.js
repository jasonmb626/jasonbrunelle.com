const screen_lines_element = document.getElementById('screen-lines');
const screen_text = screen_lines_element.dataset.html;
const screen_text_length = screen_text.length;

let currentIndex = 0;
let textOutputDone = false;

const cursorInterval = () => {
    screen_lines_element.innerHTML = screen_text;
    if (currentIndex % 2 === 0) screen_lines_element.innerHTML += '|';
    currentIndex++;
}

const intervalFunc = () => {
    const rndTime = Math.floor(50 * Math.random()) + 25;
    if (screen_text[currentIndex] === '<') {
        while (screen_text[currentIndex] !== '>')
            currentIndex++;
    }
    screen_lines_element.innerHTML = screen_text.slice(0, currentIndex);
    currentIndex++;
    if (currentIndex >= screen_text_length) textOutputDone = true;
    if (textOutputDone) {
        screen_lines_element.innerHTML = screen_text + '|';
        document.getElementById('disable-typing-directive').classList.toggle('no-show');
        document.getElementById('additional-technologies').classList.toggle('no-show');
        document.getElementById('down-arrow').classList.remove('no-show');
        setInterval(cursorInterval, 800);
    } else {
        setTimeout(intervalFunc, rndTime);
    }
}

if (screen_lines_element) {
    intervalFunc();
}

window.addEventListener('click', () => {
    textOutputDone = true;
});

document.querySelector('.monitor-screen').addEventListener('scroll', e => {
    if (getScrollPercent(e.target) < 100) {
        document.getElementById('down-arrow').classList.remove('no-show');
    } else {
        document.getElementById('down-arrow').classList.add('no-show');
    }
});

function getScrollPercent(documentElement) {
    var h = documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}