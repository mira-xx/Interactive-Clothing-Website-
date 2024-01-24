/** @type {Element} The email input for subscribing */
const emailNew = document.getElementById("sub3");
/** @type {Element} The button element for submitting the email */
const submitButton = document.getElementById("submit");

/**
 * add event listener 'click' to the submit button element
 * Gets the email value from the email input element
 */
submitButton.addEventListener("click", () => {
	const email = emailNew.value;
    
	//check if the review input is empty and alerts the user
	if (!email){
		alert("Please provide an E-mail before submitting");
	} else {//present the given reviews in the empty div section 
		/** @type {Elelment} the element for displaying the subcription message */
		const x = document.getElementById("sub");
    
		//change the text 
		x.innerHTML = "Thank You for Subscribing!";
		/** @type {Element} The element for hiding the subscription form */
		const y = document.getElementById("sub2");
		y.innerHTML = "";
	}
});
/**
 * Redirects to the Alittlelife page by clicking 
 * @function Link
 */
function Link() {
	window.location.href ="alittlelife.html";
}

//linking JSON 
/**
 * Fetches and parses JSON file 
 * @function readJSON
 * @param {string} jsonData The URL of the JSON file to fetch 
 * @return {Promise} 
 * @throws {Error} If the fetch operation fails or the reponse is not ok
 */
function readJSON(){
	fetch("data.json")
		.then(response => {
			if (!response.ok) {
				throw new Error(`Failed to fetch JSON file. Status:${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			console.log("JSON data:", data);
		})
		.catch(error => {
			console.log("Error fetching JSON:", error.message);
		});
}
