let check=document.querySelectorAll(".left-comp-check")

check.forEach(function(i){
	i.addEventListener("click",function(){
		i.classList.toggle("checked")
		let compL=i.querySelector(".comp-img")
		compL.classList.toggle("logoFilter")
		compL.classList.toggle("grey")
	})
})

let menuLeft=document.querySelector(".col-inner-left")
let show=document.querySelector(".show-catalog")
show.addEventListener("click",function(){
menuLeft.classList.toggle("active")
show.classList.toggle("strelka")
})