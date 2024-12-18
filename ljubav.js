document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.password input');
  const correctPassword = ['0', '3', '1', '1', '2', '2'];
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');
  document.getElementById('content-wrapper').appendChild(cardsContainer);

  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
      checkPassword();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });

  function checkPassword() {
    const enteredPassword = Array.from(inputs).map(input => input.value);
    if (JSON.stringify(enteredPassword) === JSON.stringify(correctPassword)) {
      displayCards();
    }
  }

  function displayCards() {
    document.getElementById('text-container').style.display = 'none';
    document.querySelector('.password').style.display = 'none';
    cardsContainer.innerHTML = '';
    cardsContainer.classList.add('active');
    for (let i = 0; i < 6; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = `card-${i + 1}`;
      if (i === 0) {
        card.innerHTML = '<div class="card-info"><p class="title">Sedimo za prazničnim stolom, vatrometi sijaju,<br>mali zubici izbijaju,<br>srecni smo kao nikada do sada<br>dok gledamo buducu lepoticu grada!</p></div>';
      } else if (i === 1) {
        card.innerHTML = '<div class="card-info"><p class="title">Gledamo u oka dva malena,<br>ona se smeje,<br>napolju sneg veje,<br>pogled nas njen greje!</p></div>';
      }
      else if (i === 2) {
        card.innerHTML = '<div class="card-info"><p class="title">Mama tatu po ruci mazi,<br>a tata sapuce nova godina dolazi<br>ona do nas dopuzi<br>i kaze u ruke me uzmi</p></div>';
      }
      else if (i === 3) {
        card.innerHTML = '<div class="card-info"><p class="title">Mama je miluje po kosi<br>i tiho sapuce da se ponosi<br>tata bocu nosi<br>od pica se zanosi!</p></div>';
      }
      else {
        card.innerHTML = '<div class="card-info"><p class="title">magic...</p></div>';
      }
      cardsContainer.appendChild(card);
    }
  }
});

