import _ from 'underscore';

/**
 * This function creates a new deck
 * @param {Array<String>} types example ['C', 'D', 'H', 'S']
 * @param {Array<String>} specials example ['J', 'Q', 'K', 'A']
 * @returns {Array<String>} return a new deck
 */


const createDeck = (types, specials) => {

    if ( !types || types.length === 0 ) 
        throw new Error ('"types" must be a string array');
    if ( !specials || specials.length === 0 ) 
        throw new Error ('"specials" must be a string array');


    let deck = [];

    for(let i=2; i<=10; i++) {
        for(let type of types) {
            deck.push(i + type);
        };
    };
    for(let type of types) {
        for(let special of specials) {
            deck.push(special + type)
        };
    };
    return _.shuffle(deck)                     // Esta función no es nativa del js, la traemos de la librería 'underscore', lo que hace es mezclar el array que se le pasa como parámetro
};

export { createDeck };