$(document).ready(() => {

	$(".btn").click(function (event){
		let clicked = this.innerHTML;
		let calculationToExecute = $("#calculationHeader").html();
		console.log(clicked);

		if (clicked == "C") {
			$("#calculationHeader").empty();
		} else if (clicked == "=") {
			console.log(calculationToExecute);
			console.log(typeof(calculationToExecute));
			// $("#calculationHeader").html
		} else {
			$("#calculationHeader").append(clicked);
		}
	});

});
