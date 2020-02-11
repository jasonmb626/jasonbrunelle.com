const screen_lines_element = document.getElementById('screen-lines');
const additionalTechnologiesElement = document.getElementById('additional-technologies');
let cursorSpan;

const screen_text = screen_lines_element.dataset.html;
const screen_text_length = screen_text.length;

let technologyElements = null;
let technologyElementIndex = 0;
let numTechnologyElements;
let fadeInInterval;

let currentIndex = 0;
let textOutputDone = false;

const fadeInTechnologies = () => {
    technologyElements = getTechnologyElements();
    numTechnologyElements = technologyElements.length;
    fadeInInterval = setInterval(() => {
        additionalTechnologiesElement.appendChild(technologyElements[technologyElementIndex]);
        technologyElementIndex++;
        if (technologyElementIndex > numTechnologyElements - 1) {
            clearInterval(fadeInInterval);
        }
    }, 80);
}

const getTechnologyElements = () => {
    const favoriteTechnologies = [
        {img: "JavaScript.png", alt: "JavaScript"},
        {img: "Node.png", alt: "Node.JS"},
        {img: "Express.png", alt: "Express.JS"},
        {img: "React.png", alt: "React.JS"},
        {img: "CSS.png", alt: "CSS3"},
        {img: "HTML.png", alt: "HTML5"},
        {img: "TypeScript.png", alt: "TypeScript"},
        {img: "Git.png", alt: "Git"},
        {img: "GitHub.png", alt: "GitHub"},
        {img: "AWS.png", alt: "Amazon Web Services"},
        {img: "Linux.png", alt: "Linux"},
        {img: "Postgre.png", alt: "PostgreSQL"},
        {img: "Mongo.png", alt: "MongoDB"},
        {img: "VisualStudioCode.png", alt: "Visual Studio Code"}
    ];
    const technologyTemplate = document.getElementById('technology-example');
    return favoriteTechnologies.map(technology => {
        const technologyElement = technologyTemplate.cloneNode(true);
        const img = technologyElement.content.querySelector('img');
        img.src = `images/png/${technology.img}`;
        img.alt = technology.alt;
        return img;
    });
}

const cursorInterval = () => {
    cursorSpan.classList.toggle('no-show');
}

const intervalFunc = () => {
    const rndTime = Math.floor(25 * Math.random()) + 25;
    if (screen_text[currentIndex] === '<') {
        while (screen_text[currentIndex] !== '>')
            currentIndex++;
    }
    screen_lines_element.innerHTML = screen_text.slice(0, currentIndex);
    currentIndex++;
    if (currentIndex >= screen_text_length) textOutputDone = true;
    if (textOutputDone) {
        screen_lines_element.innerHTML = screen_text + '<span id="cursor"></span><br><br>';
        cursorSpan = document.getElementById('cursor');
        document.getElementById('disable-typing-directive').classList.toggle('no-show');
        fadeInTechnologies();
        const monitor_screen = document.querySelector('.monitor-screen');
        if (monitor_screen.scrollHeight > monitor_screen.clientHeight) 
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