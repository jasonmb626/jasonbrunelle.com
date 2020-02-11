const main = document.getElementsByTagName('main')[0];
const cards = document.querySelectorAll('.card');

const addComeInClass = partial => {
    const viewTop = main.scrollTop;
    const viewBottom = main.scrollTop + window.innerHeight;
    cards.forEach(card => {
        const cardTop = card.offsetTop;
        const cardBottom = card.offsetTop + card.offsetHeight;
        compareTop    = partial === true ? cardBottom : cardTop,
        compareBottom = partial === true ? cardTop : cardBottom;
        if (compareBottom <= viewBottom - Math.floor(window.innerHeight / 3) && compareTop >= viewTop ) {
            card.classList.add('come-in');
        }
    });
}

addComeInClass(true);

main.addEventListener('scroll', e => {
    addComeInClass(true);
});