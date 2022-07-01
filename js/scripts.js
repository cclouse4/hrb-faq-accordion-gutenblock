$(document)
.ready(function(){})

.on("click", ".accordion-item--a", function(e){
	e.preventDefault();
	$(this).parents(".accordion-item")
		.toggleClass("open")
		.find(".accordion-item--answer")
		.stop(true, true)
		.slideToggle(300);
});