const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const buyBtns = $$('.js-buy-ticket')
const modal = $('.js-modal')
const modalContainer = $('.js-modal-container')
const closeTicket = $('.js-modal-close')
const openMenu = $('.js-menu-mobile')
const header = $('.header')
const headerHeight = header.clientHeight
const menuItems = $$('a[href *= "#"]')
buyBtns.forEach(element => {
    element.addEventListener('click',()=>{
        modal.classList.add('open')
    })
});
closeTicket.addEventListener('click',()=>{
    modal.classList.remove('open')
})
modal.addEventListener('click',()=>{
    modal.classList.remove('open')
})
modalContainer.addEventListener('click', (event)=>{
    event.stopPropagation()
})
openMenu.addEventListener('click', ()=>{
    if(header.clientHeight === headerHeight){
        header.style.height ='auto'
    }
    else{
        header.style.height =null
    }
})
menuItems.forEach(element => {
    element.addEventListener('click',()=>{
        header.style.height = null
    })
})