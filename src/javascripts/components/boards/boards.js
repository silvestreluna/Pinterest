import util from '../../helpers/util';
import boardData from '../../helpers/data/boardsData';
import pins from '../pins/pins';
import pinsData from '../../helpers/data/pinsData';


const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('You clicked a button!', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};


const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};


const domBuilder = (Array) => {
  let domString = '';
  Array.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div id=${board.id} class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<p>${board.name}</p>`;
    domString += `<button class="btn btn-warning see-pins">${board.pins.length} Pins</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then(resp => pinsData.getPinsForEachBoard(resp.data.boards))
    .then((boardsWithPins) => {
      domBuilder(boardsWithPins);
    })
    .catch(err => console.error('error from initBoards request', err));
};

export default { initBoards };
