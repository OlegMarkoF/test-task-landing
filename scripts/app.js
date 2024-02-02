// получаем список карточек
const cards = document.querySelector('.cards');
const card = Array.from(cards.children);

// получаем список кнопок
const btn = document.querySelectorAll('.card-button');
const btnList = Array.from(btn);

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
      for (let i = 0; i < btnList.length; i++) {
        if (this.className != 'active') {
        btnList[i].classList.add('button-active')
        break;
      } else if (this.className == 'active') {
          btnList[i].classList.remove('button-active')
          
        break;
      }
      }
    
  })
}


