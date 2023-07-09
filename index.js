const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('button[type=submit]');
const tiles = document.querySelectorAll('.tile');
const findThis = document.getElementById('findThis');

document.getElementById('hide-button').style.visibility = 'hidden';

// Asign color to Elements
tiles.forEach(function (tile) {
  const colour = getColour();
  tile.style.backgroundColor = colour;
  tile.innerHTML = colour;
  findThis.innerHTML = colour;
});

function getColour() {
  const letter = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += letter[Math.floor(Math.random() * 16)];
  }
  return colour;
}

tiles.forEach(function (tile) {
  tile.addEventListener('click', function () {
    if (tile.innerHTML === findThis.innerHTML) {
      alert('correcto mundo!');
      checkbox.checked = true;
      submitBtn.disabled = false;
    } else {
      alert('try again');
      location.reload(true);
    }
  });
});
