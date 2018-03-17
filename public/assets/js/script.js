$(function() {
	$('.input-error').hide();

	// Submit Button - Add A New Burger
	$("#btnSubmit").on("click", function(event) {
		event.preventDefault();
		console.log("Submit Button was pressed.");
		let burgerName = $("#burger_name").val().trim()
		if (burgerName == "") {
			$('.input-error').show();
		}
	});

	// Add To Menu button 
	$(".devour").on("click", function(event) {
		// event.preventDefault();
		
	});
});