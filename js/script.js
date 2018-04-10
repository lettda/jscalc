$(document).ready(() => {

	$(".btn").click(function (event){
		let clicked = this.innerHTML;
		let calculationToExecute = $("#calculationHeader").html();
		// console.log(clicked);

		if (clicked == "C") {
			$("#calculationHeader").empty();
		} else if (clicked == "=") {
			console.log(calculationToExecute);
			console.log(eval(calculationToExecute));
			$("#calculationHeader").html(eval(calculationToExecute));
		} else {
			$("#calculationHeader").append(clicked);
		}
	});

});
