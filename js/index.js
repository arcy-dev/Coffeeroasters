function cardSelector(id) {
  const cardGroup = document.querySelectorAll(`${id} .uk-card-default`);

  cardGroup.forEach((card) => {
    card.addEventListener('click', () => {
      cardGroup.forEach((c) => {
        c.classList.remove('active');
      });
      card.classList.add('active');
    });
  });
}
cardSelector('#preferences');
cardSelector('#beanType');
cardSelector('#quantity');
cardSelector('#grindOption');
cardSelector('#deliveries');
