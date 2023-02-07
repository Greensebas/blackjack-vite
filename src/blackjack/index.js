import _ from 'underscore';                          // Acá se hace el import de la librería 'underscore' y se la renombra con un '_' para poder traer la librería entera y no solo algunas funciones
import { createDeck } from './useCases/createDeck';  // Podemos crear un alias para llamar la funcon por otro nombre '{ createDeck as createNuevoDeck'
import { pickCard } from './useCases/pickCard';
import { cardValue } from './useCases/cardValue';

(() => {                      // Esto se llama "patrón módulo" y permite que desde la consola del browser no se pueda acceder a las variables
  'use strict'                // Esto le dice a js que sea estricto a la hora de evaluar el código (yo podría declarar numeros = [1, 2, 3] sin let, var o const y js lo tomaría igual, pero en 'use strict' esto arroja error)

  let deck                = [];
  const types             = ['C', 'D', 'H', 'S'],
        specials          = ['J', 'Q', 'K', 'A'];

  let playersPointsDom    = [];

  // HTML references
  const btnNewGame        = document.querySelector('#btnNewGame'),
        btnTakeCard       = document.querySelector('#btnTakeCard'),
        btnFinish         = document.querySelector('#btnFinish');

  const pointsHTML        = document.querySelectorAll('#small')
  
  const playersCardsDiv   = document.querySelectorAll('.cardsDiv');


  // this function start the game
  const startGame = (numPlayers = 2) => {
      deck = createDeck( types, specials );
      playersPointsDom = []
      for ( let i = 0; i < numPlayers; i++ ) {
          playersPointsDom.push(0);
      };

      pointsHTML.forEach( elem => elem.innerText = 0);
      playersCardsDiv.forEach( elem => elem.innerHTML = "");

      btnTakeCard.disabled = false;
      btnFinish.disabled = false;
  };




  // Turn: 0 = first player ... lastone = computer
  const pointsCounter = (card, turn) => {
      playersPointsDom[turn] = playersPointsDom[turn] + cardValue(card);
      pointsHTML[turn].innerText = playersPointsDom[turn];
      return playersPointsDom[turn]
  }

  const renderCard = (card, turn) => {
      const imgCard = document.createElement('img');
      imgCard.classList.add('cards');                           // Also imgCard.className = 'cards'
      imgCard.src = `assets/cartas/${card}.png`;
      playersCardsDiv[turn].append(imgCard);
  }

  const winner = () => {
      const [minPoints, computerPoints] = playersPointsDom

      setTimeout(() => {
          if(minPoints === computerPoints ) {
          alert('Empate')
          } else if (minPoints > 21) {
          alert('Lo siento, has perdido esta mano...')
          } else if (computerPoints > minPoints && computerPoints <= 21) {
          alert('Lo siento, has perdido esta mano...')
          } else if (computerPoints > 21) {
          alert('Felicidades, has ganado la mano!')
          }
      }, 20);
  }

  // computer

  const computerTime = ( minPoints ) => {
      let computerPoints = 0;
      do {
          const card = pickCard(deck);
          computerPoints = pointsCounter(card ,playersPointsDom.length - 1 );

          renderCard( card, playersPointsDom.length - 1);

          if(minPoints > 21 || computerPoints === 21) {
              break
          }
      } while (computerPoints <= minPoints)

      winner();
  }


  // EVENTS

  btnTakeCard.addEventListener('click', () => {
      const card = pickCard(deck); 

      const playerPoints = pointsCounter(card, 0);

      renderCard( card, 0);

      if (playerPoints > 21) {
          btnTakeCard.disabled = true;
          btnFinish.disabled = true;
          computerTime(playerPoints);
      } else if (playerPoints === 21) {
          btnTakeCard.disabled = true;
          btnFinish.disabled = true;
          computerTime(playerPoints);
      }
  });

  btnFinish.addEventListener('click', () => {
      btnTakeCard.disabled = true;
      btnFinish.disabled = true;
      computerTime(playersPointsDom[0]);
  })

  btnNewGame.addEventListener('click', () =>{
      startGame();
  })

  return 'Hola Mundo';

})();