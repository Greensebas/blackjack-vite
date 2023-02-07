/**
 * this function pick a card
 * @returns {String} return a card
 */

const pickCard = (deck) => {
    if (deck.length === 0) {
        throw 'No hay cartas en la baraja'
    };
    return deck.shift();
};

export { pickCard };