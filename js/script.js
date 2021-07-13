let menuParent=document.querySelectorAll(".parent")
menuParent.forEach(function(i){
	i.addEventListener("click",function()
	{
		let ul=i.querySelector(".sub-menu-left")
		ul.classList.toggle('open')
	})
})

let close=document.querySelector(".header__menu-close")
let ham=document.querySelector('.header__hamb')
let menu=document.querySelector('.header__menu')
ham.addEventListener("click",function(){
	menu.classList.add('active')
})
close.addEventListener("click",function(){
	menu.classList.remove('active')
})