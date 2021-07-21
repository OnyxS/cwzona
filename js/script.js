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

let zayava=document.querySelector(".request")
let call=document.querySelector(".call__me-tel")
let reqCLose=document.querySelectorAll(".fancybox-close")
let formMail=document.querySelector("#fancyboxMail")
let formTel=document.querySelector("#fancyboxTele")
let form=document.querySelectorAll(".fancybox")
let formOver=document.querySelectorAll(".fancybox-overlay")



zayava.addEventListener("click",function(){
		formMail.style.display="block"
	document.body.style.overflow="hidden"
	
})

call.addEventListener("click",function(){
	formTel.style.display="block"
document.body.style.overflow="hidden"

})




reqCLose.forEach(function(cl){
	cl.addEventListener("click",function(){
		form.forEach(function(item){
			item.style.display="none"
		
		})
		document.body.style.overflow="visible"
		
	})
})



formOver.forEach(function(over){
	over.addEventListener("click",function(){
		form.forEach(function(item){
			item.style.display="none"
		
		})
		document.body.style.overflow="visible"
		
	})
})