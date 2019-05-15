import pinsData from '../../helpers/data/pinsData';
import util from '../../helpers/util';

const writePins = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += `<img src="${pin.imageUrl}" alt="pin image">`;
  });
  util.printToDom('pins-on-board', domString);
};

const initPins = (boardId) => {
  pinsData.loadPinsForBoard(boardId)
    .then((pins) => {
      console.error('All pins', pins);
      writePins(pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
