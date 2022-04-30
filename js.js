const menu_list = document.querySelector('.menu_list');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    menu_list.style.display = 'flex';
    menu_list.style.top = '0';
}
function close(){
    menu_list.style.top = '-120%';
}