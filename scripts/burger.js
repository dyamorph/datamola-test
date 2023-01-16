const burger = document.querySelector('.menu_burger-icon')
const navMenu = document.querySelector('.menu_list')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.menu_link').forEach(link=> {
  link.addEventListener('click', () => {
    burger.classList.remove('active')
    navMenu.classList.remove('active')
  })
})
