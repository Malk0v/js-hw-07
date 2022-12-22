const magicBtn = document.querySelector('.magicBtn')
magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.hero__image');
  const titleRef = document.querySelector('.hero_title');
  titleRef.textContent = 'Это новый текст'
  imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=28w=480';
  imageEl.alt = 'Это новый котик'
    
  console.log(imageEl);
  console.log(titleRef);
});