const screen_lines_element = document.getElementById('screen-lines');
const screen_text = screen_lines_element.dataset.text;
const screen_text_length = screen_text.length;

let currentIndex = 0;
let interval;

if (screen_lines_element) {
    interval = setInterval(() => {
        if (screen_text[currentIndex] === '<') {
            while (screen_text[currentIndex] !== '>')
                currentIndex++;
        }
        screen_lines_element.innerHTML = screen_text.slice(0, currentIndex);
        currentIndex++;
        if (currentIndex > screen_text_length) {
            clearInterval(interval);
            screen_lines_element.innerHTML += '|';
            setInterval(() => {
                screen_lines_element.innerHTML = screen_text.slice(0, currentIndex);
                if (currentIndex % 2 === 0) screen_lines_element.innerHTML += '|';
                currentIndex++;
            }, 800);
        }
    }, 80);
}

window.addEventListener('click', () => {
    if (interval)
        clearInterval(interval);
    screen_lines_element.innerHTML = screen_text;
});