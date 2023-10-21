const links = Document.querySelector('.header .nav-bar .nav-list .links');
const mobile_menue = Document.querySelector('.header .nav-bar .nav-list ul');
const header = Document.querySelector('.header.links');

links.addEventListener('click',()=>{
	links).classList.toggle('active');
});

Document.addEventListener('scroll'() => {
	var scroll_position =Window.scrollY;
	if (scroll_position > 250{
		header.Style.background ='29323c';
	}else{
		header.Style.background = 'transparent';
	}
});
