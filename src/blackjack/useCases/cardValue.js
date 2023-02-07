
/**
 * 
 * @param {String} card 
 * @returns {Number} Asign a value to the card
 */
  const cardValue = ( card ) => {
    let value = card.substring(0, card.length - 1);
    isNaN(value) ? value = (value === 'A') ? 11 : 10 : value = +value;
    return value;
}

export {cardValue};