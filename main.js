const emailNew = document.getElementById("sub3");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
	const email = emailNew.value;
    
	//When no email is typed in
	if (!email){
		alert("Please provide an E-mail before submitting");
	} else {//present the given reviews in the empty div section 
		const x = document.getElementById("sub");
    
		//change the text 
		x.innerHTML = "Thank You for Subscribing!";
		const y = document.getElementById("sub2");
		y.innerHTML = "";
	}
});
function Link() {
	window.location.href ="alittlelife.html";
}

//linking JSON 
function readJSON(jsonData){
	fetch(jsonData)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Failed to fetch JSON file. Status:${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			var jsonData = data; 
			console.log("JSON data:", jsonData);
			return(data);
		})
		.catch(error => {
			console.log("Error fetching JSON:", error.message);
		});
}