<<<<<<< HEAD
	var get_date = "Type the date";


function myfunction() {
	var get_words = prompt("Completed on?");
	var get_date = get_words;
	if(get_date == null) {
		get_date = "Pending";
	}
	document.getElementById("Trollslayer").innerHTML = "Completed on: " + get_date;
	document.getElementById("Trollslayer").className = "done";
}
