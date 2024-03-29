// Selects the row of cards based on ID
function cardSelector(id) {
  // Creates an array of the cards within the row
  const cardGroup = document.querySelectorAll(`#${id} .uk-card-default`);

  cardGroup.forEach((card, index) => {
    card.addEventListener('click', () => {
      // loops through cards in the row to remove all active classes
      cardGroup.forEach((c) => {
        c.classList.remove('active');
      });

      // adds the active class to clicked card
      card.classList.add('active');

      // Puts card title into order summary
      if (id === 'preferences') {
        const preferencesRequest = document.querySelector(`#${id} .uk-card.active h4`).innerText;
        const preferencesResult = document.querySelectorAll('.preferencesResult');
        preferencesResult[0].innerText = preferencesRequest;
        preferencesResult[1].innerText = preferencesRequest;
      } else if (id === 'beanType') {
        const beanTypeRequest = document.querySelector(`#${id} .uk-card.active h4`).innerText;
        const beanTypeResult = document.querySelectorAll('.beanTypeResult');
        beanTypeResult[0].innerText = beanTypeRequest;
        beanTypeResult[1].innerText = beanTypeRequest;
      } else if (id === 'quantity') {
        const quantityRequest = document.querySelector(`#${id} .uk-card.active h4`).innerText;
        const quantityResult = document.querySelectorAll('.quantityResult');
        quantityResult[0].innerText = quantityRequest;
        quantityResult[1].innerText = quantityRequest;
      } else if (id === 'grindOption') {
        const grindOptionRequest = document.querySelector(`#${id} .uk-card.active h4`).innerText;
        const grindOptionResult = document.querySelectorAll('.grindOptionResult');
        grindOptionResult[0].innerText = grindOptionRequest;
        grindOptionResult[1].innerText = grindOptionRequest;
      } else if (id === 'deliveries') {
        const deliveriesRequest = document.querySelector(`#${id} .uk-card.active h4`).innerText;
        const deliveriesResult = document.querySelectorAll('.deliveriesResult');
        deliveriesResult[0].innerText = deliveriesRequest;
        deliveriesResult[1].innerText = deliveriesRequest;

        const priceArr = ['14.00', '17.25', '22.50'];
        let totalCost = document.querySelector('.totalCost');
        totalCost.innerText = priceArr[index];
      }

      // Checks to see all cardGroups have been selected to remove 'disabled' attribute
      const allActiveCards = document.querySelectorAll('.uk-card.active');
      const button = document.querySelector('#createPlanBtn');
      if (allActiveCards.length === 5) {
        button.removeAttribute('disabled');
      }
    });
  });
}

cardSelector('preferences');
cardSelector('beanType');
cardSelector('quantity');
cardSelector('grindOption');
cardSelector('deliveries');
