/**
 * This function will sow more information about the book when clicked. 
 * @function moreInfo
 */
function moreInfo() {
	const element = document.getElementById("more");
	element.innerHTML = "First published in March 10, 2015 <br> Language: English <br> Literary Awards: Booker Prize Nominess (2015),  Dayton Literary Peace Prize Nominee for Fiction (2016),  National Book Award Finalist for Fiction (2015)";
}

/**The link leads to the homepage when clicked 
 * @function backHome 
 */
function backHome() {
	window.location.href ="formative.html";
}


//choosing a cover, taking a quantity value as input, and return the multiplication as output 
/**
 * @type {Element} The cover element of the book
 */
var coverEl = document.querySelector("#cover");
/**
 * @type {Element} the quantity input element of the book 
 */
var quantityEl = document.querySelector("#quantity");
/**
 * @type {Element} The subtotal output element of the book 
 */
var subtotalEl = document.querySelector("#subtotal");

// Add event listener to the cover and quantity element 
coverEl.addEventListener("change",calculateTotal);
quantityEl.addEventListener("change",calculateTotal);

/**
 * @type {Object} types of cover available and their prices
 */
var cover_price = {};
cover_price["Hardcover"] = 20 ; 
cover_price["Paperback"] = 12 ;
cover_price["Kindle edition"] = 6 ;
cover_price["Audiobook"] = 2 ;

/**
 * Calculates the total price of the book based on the cover and the quantity 
 * @function calculateTotal
 * @return 
 */
function calculateTotal() {
	var unitCost = cover_price[coverEl.value];
	var quantity = quantityEl.value || 0 ; 

	subtotalEl.textContent = ` $${(unitCost * quantity)}`;
}
     
// Rating 
//Citation: Look at alittlelife.html
/** @type {NodeList} a collection of star elements */
const stars = document.querySelectorAll(".star");
/** @type {Element} The output element for displaying the rating value */
const rating = document.getElementById("rating");
/** @type {Element} The textarea element for writing a new review */
const reviewNew = document.getElementById("review");
/** @type {Element} The button element for submitting a new review */
const submitButton = document.getElementById("submit");
/** @type {Element} The container element for displaying the past reviews */
const reviewsPast = document.getElementById("reviews");


stars.forEach((star) => {
	/**Add event listener 'click' to each star element */
	star.addEventListener("click",() => {
		/** @type {number} the number of stars selected by user */
		const numofstars = parseInt(star.getAttribute("data-value"));
		rating.innerText = numofstars;
		/** @param {forEach} callback The function to execute for each star element  */
		stars.forEach((s, index) => {
			/** Adding class to each star based on the number of stars selected
			 * @param {number} index The index of the star element in the stars collection 
			 * @param {number} numofstars The number of stars selected by the user 
			 */ 
			if (index < numofstars) {
				s.classList.add(getStarColorClass(numofstars));
			}
		});
		//Adding "selected" class to the clicked star
		star.classList.add("selected");
	});
});

/**
 * Return a class name based on the number of stars
 * @function getStarColorClass
 * @param {number} value The number of stars, from 1 to 5  
 * @returns {string} The class name (one, two, three, four, five) 
 */
function getStarColorClass(value) {
	switch (value) {
	case 1:
		return "one";
	case 2:
		return "two";
	case 3:
		return "three";
	case 4:
		return "four";
	case 5:
		return "five";
	default:
		return "";
	}
}

//Reviews
/** add event listener 'click' to the submit button elemnt */
submitButton.addEventListener("click", () => {
	/** @type {string} the review text entered by the user */
	const review = reviewNew.value;
	/** @type {number} the rating value selected by the user */
	const userRating = parseInt(rating.innerText);
	//check if the review input is empty and alerts the user
	if (!review){
		alert("Please provide a review before submitting");
        
	} else{  //present the given reviews in the empty div section
		/**
		 * Creates new div element for a review and appends it to the past reviews container
		 * @param {string} review The review text entered by the user 
		 * @param {string} userRating The rating value selected by the user 
		 */ 
		const reviewElement = document.createElement("div");
		reviewElement.classList.add("review");
		reviewElement.innerHTML = 
        `<strong>Rating: ${userRating}/5 </strong> <br> Review: ${review}`;
		reviewsPast.appendChild(reviewElement);
	}
});
    
