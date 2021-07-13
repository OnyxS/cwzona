let ul=document.querySelectorAll(".categs__ul")
ul.forEach(function(i){
if(i.offsetHeight>210) {
	
	i.style.height="180px"
	i.style.overflow="hidden"
	let parent=i.parentNode
	let btn=document.createElement("a")
	btn.innerHTML="Показать еще"
	btn.className="read__more"
	btn.style.color="#183312"
	parent.insertBefore(btn,i.nextSibling)
}
});



let more=document.querySelectorAll(".read__more")
more.forEach(function(m){
	let parentMore=m.closest(".categs__item-cont")
	let parentUL=parentMore.querySelector(".categs__ul")
	m.addEventListener("click",function(){
		parentUL.style.overflow="visible"
		parentUL.style.height="auto"
		m.style.display="none"

	})
})

