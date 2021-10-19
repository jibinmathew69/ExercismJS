export function getItem(cards, position) {
	return cards[position];
}

export function setItem(cards, position, replacementCard) {
	cards[position] = replacementCard;
	return cards;
}

export function insertItemAtTop(cards, newCard) {
	cards.push(newCard);
	return cards;
}

export function removeItem(cards, position) {
	return cards.splice(position, 1);
}

export function removeItemFromTop(cards) {
	return cards.shift();
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  throw new Error('Implement the insertItemAtBottom function');
}

/**
 * Remove card from the beginning of the cards cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  throw new Error('Implement the removeItemAtBottom function');
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  throw new Error('Implement the checkSizeOfStack function');
}
