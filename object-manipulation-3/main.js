console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = generateDeck();
deck = shuffle(deck);

game();

function generateDeck() {
  var deck = [];
  for (var i = 1; i < 14; i++) {
    for (var j = 0; j < 4; j++) {
      var suit = '';
      var rank = '';
      var value = i;
      switch (j) {
        case 0:
          suit = 'hearts';
          break;
        case 1:
          suit = 'diamonds';
          break;
        case 2:
          suit = 'clubs';
          break;
        case 3:
          suit = 'spades';
          break;
      }
      switch (i) {
        case 1:
          rank = 'ace';
          value = 11;
          break;
        case 11:
          rank = 'jack';
          value = 10;
          break;
        case 12:
          rank = 'queen';
          value = 10;
          break;
        case 13:
          rank = 'king';
          value = 10;
          break;
        default:
          rank = i;
          break;
      }
      var card = {
        rank: rank,
        suit: suit,
        value: value
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffle(deck) {
  var shuffledDeck = [];
  for (var i = 0; i < deck.length; i++) {
    shuffledDeck.push(deck[Math.floor(Math.random() * 52)]);
  }
  return shuffledDeck;
}

function dealCards(deck) {

  return deck.pop();

}

function game() {
  var p1 = [dealCards(deck), dealCards(deck)];
  var p2 = [dealCards(deck), dealCards(deck)];

  console.log('Player 1\'s cards: ', p1[0].rank + ' of ' + p1[0].suit + ', ' + p1[1].rank + ' of ' + p1[1].suit);
  console.log('Player 2\'s cards: ', p2[0].rank + ' of ' + p2[0].suit + ', ' + p2[1].rank + ' of ' + p2[1].suit);
  var p1Score = p1[0].value + p1[1].value;
  var p2Score = p2[0].value + p2[1].value;

  console.log('Player 1\'s score: ', p1Score);
  console.log('Player 2\'s score: ', p2Score);

  if (p1Score > p2Score) {
    console.log('Player 1 wins');
  } else if (p1Score < p2Score) {
    console.log('Player 2 wins');
  } else {
    console.log('It\'s a tie! Running again...');
    game();
  }

}
