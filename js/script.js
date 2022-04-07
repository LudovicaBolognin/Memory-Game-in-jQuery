const arrayCards = [
    { imgSrc: 'img/amare.png', name: 'amare'},
    { imgSrc: 'img/amare.png', name: 'amare'},
    { imgSrc: 'img/amare1.png', name: 'amare1'},
    { imgSrc: 'img/amare1.png', name: 'amare1'},
    { imgSrc: 'img/arrabbiato.png', name: 'arrabbiato'},
    { imgSrc: 'img/arrabbiato.png', name: 'arrabbiato'},
    { imgSrc: 'img/bello.png', name: 'bello'},
    { imgSrc: 'img/bello.png', name: 'bello'},
    { imgSrc: 'img/piangere.png', name: 'piangere'},
    { imgSrc: 'img/piangere.png', name: 'piangere'},
    { imgSrc: 'img/ridere.png', name: 'ridere'},
    { imgSrc: 'img/ridere.png', name: 'ridere'},
    { imgSrc: 'img/shock.png', name: 'shock'},
    { imgSrc: 'img/shock.png', name: 'shock'},
    { imgSrc: 'img/spavento.png', name: 'spavento'},
    { imgSrc: 'img/spavento.png', name: 'spavento'},
];

//Quando il documento è pronto
$( () => {
    const playerLivesCount = $('.playerLivesCount');
    let playerLives = arrayCards.length;
    playerLivesCount.text(playerLives);


    const container = $('.container');
    $('<section></section>').css({
    'margin': '1em',
    'display': 'grid',
    'grid-template-columns': 'repeat(4, 8rem)',
    'grid-template-rows': 'repeat (4, 8rem)',
    'grid-gap': '0.3rem',
    'perspective': '800px',
    }).appendTo(container);

// Randomizzare le carte
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}

//Generazione delle carte in HTML
const cardGenerator = () => {
    const cardData = shuffle(arrayCards);


    //???? perché non funziona cardData.each( funzione )
    cardData.forEach( function(item) {
        const card = $('<div></div>');
        const face = $('<img>');
        const back = $('<div></div>').css({
            'background': 'rgb(20, 20, 20)',
            'position': 'absolute',
            'top': '0',
            'backface-visibility': 'hidden',
        });
        card.addClass('card');
        face.addClass('face');
        back.addClass('back');

        // Source e nome delle immagini:
        face.attr('src', item.imgSrc);
        card.attr('name', item.name);

        // Attaccare le carte alla sezione:
        card.appendTo('section');
        face.appendTo(card);
        back.appendTo(card);

        // Aggiungere la classe toggle alle carte cliccate:
        card.on('click', (e) => {
            // Controllare se addClass equivale a element.classList ????
            card.toggleClass('toggleCard');
            checkCards(e);
        });
    });
};

// Confrontare le carte:
const checkCards = (e) => {
    // console.log(e); -> Pointer events
    const clickedCard = e.target;

    // Perché fa problemi con addClass?
    clickedCard.classList.add('flipped');
    const flippedCards = $('.flipped');
    const toggleCard = $('.toggleCard');

}






cardGenerator();







});