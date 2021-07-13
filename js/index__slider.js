const index=new Swiper('.index__slider',{
	
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		
	},
	speed:800,
	effect:'coverflow',
	coverflowEffect:{
		rotate:5,
		slideShadows:true,
		stretch:100,
	},
});