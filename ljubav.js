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
    cardsContainer.innerHTML = '';
    cardsContainer.classList.add('active');
    for (let i = 0; i < 6; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = '<div class="card-info"><p class="title">magic...</p></div>';
      cardsContainer.appendChild(card);
    }
  }
});

