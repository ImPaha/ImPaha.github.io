function smooth_scroll(y) {
	window.scroll({
		left: 0,
		top: y,
		behavior: 'smooth'
	})
}
function coordin(){
	console.log(window.pageYOffset)
}