
const printToDom = (divID, itemToPrint) => {
  const itemId = document.getElementById(divID);
  itemId.innerHTML = itemToPrint;
};

export default { printToDom };
