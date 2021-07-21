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
		headerTop.style.paddingBottom="20px"
		menu.style.display="none"
		search.style.marginTop="0"
	}
	else{
		search.style.marginTop="18px"
		top.style.position="static"
		menu.style.display="block"
		search.style.display="none"
		top.style.backgroundColor="transparent"
		headerTop.style.paddingBottom="20px"
	}
}