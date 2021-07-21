window.onscroll = function() {
	posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	let top=document.querySelector(".header")
	let search=document.querySelector(".search__form")
	let menu=document.querySelector(".header__menu")
	let headerTop=document.querySelector(".header__top")
	if(posTop>650) {
		top.style.position="fixed"
		search.style.display="flex"
		top.style.left="0"
		top.style.right="0"
		top.style.margin="auto"
		top.style.backgroundColor="#F7F7F7"
		headerTop.style.paddingBottom="0"
		search.style.marginTop="0"
		menu.style.display="none"
	}
	else{
		search.style.display="flex"
		search.style.marginTop="18px"
		top.style.position="static"
		menu.style.display="block"
		top.style.backgroundColor="transparent"
	}
}