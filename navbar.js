const menuTrigger = document.querySelector('.menu-trigger')
const menu = document.querySelector('.navbar-menu')

// console.log(menuTrigger)
// console.log(menu)

let open = false
menuTrigger.addEventListener('click', function() {
  console.log('buka menu: ' + open)
  open = !open
  if (open) {
    menu.classList.add('open')
  } else {
    menu.classList.remove('open')
  }
})
// menuTrigger.addEventListener('mouseenter', () => console.log('masuk'))
// menuTrigger.addEventListener('mouseleave', () => console.log('keluar'))