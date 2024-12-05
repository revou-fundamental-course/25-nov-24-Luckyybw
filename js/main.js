function results() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	getheight = height * 0.01; // 1 centimeters = 0.01 meters
	getBMI = (weight / Math.pow(getheight, 2)).toFixed(2);

	if (getBMI <= 18.4) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showUnderweight").innerHTML = "Result : Kekurangan berat badan &#128533";
	}

	if (getBMI >= 18.5 && getBMI <= 24.9) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showNormal").innerHTML = "Result : Normal &#128512;";
	}

	if (getBMI >= 25 && getBMI <= 29.9) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showOverweight").innerHTML = "Result : Kelebihan berat badan &#128544";
	}

	if (getBMI >= 30) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showObese").innerHTML = "Result : Obesitas &#128545";
	}

	if ((weight.length <= 0) || (height.length <= 0)) {
		document.getElementById("message").innerHTML = "Catatan: Silakan masukkan tinggi dan berat badan Anda dengan tepat.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	if ((weight < 0) || (height < 0)) {
		document.getElementById("message").innerHTML = "Catatan : Tinggi dan berat badan tidak boleh bernilai negatif.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	if ((weight == 0) || (height == 0)) {
		document.getElementById("message").innerHTML = "Catatan: Silakan masukkan tinggi dan berat badan Anda dengan tepat.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	else {
		document.getElementById("showResult").innerHTML = showResults;
	}

	// remove the [results] button

	document.querySelector(".reset").style.display = "block";
	document.querySelector(".results").style.display = "none";
}