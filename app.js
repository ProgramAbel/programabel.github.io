// JavaScript Document
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const body = document.querySelector('.content');
	
	burger.addEventListener('click',() =>{
		body.classList.toggle('content-faded');
		nav.classList.toggle('nav-active');
		
		
		
		navLinks.forEach((link, index)=>{
			if(link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navlinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
			}
		});
	});
	
	
}

navSlide();