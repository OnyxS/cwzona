let btn1=document.querySelector(".detalka-link-btn1")
let btn2=document.querySelector(".detalka-link-btn2")
let table=document.querySelector(".info-table")
let text=document.querySelector(".detalka-text")
let detail=document.querySelector("#detail")
btn1.addEventListener("click",function(){
	btn1.classList.add("active")
	btn2.classList.remove("active")
	table.style.display="table"
	text.style.display="block"
	detail.style.display="none"
})
btn2.addEventListener("click",function(){
	btn2.classList.add("active")
	btn1.classList.remove("active")
	table.style.display="none"
	text.style.display="none"
	detail.style.display="block"
})