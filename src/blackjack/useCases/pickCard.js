/**
 * this function pick a card
 * @param {Array<String>} deck Must be a string array
 * @returns {String} Return a card
 */

const pickCard = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en la baraja'
    };
    return deck.shift();
};

export { pickCard };