function moreInfo() {
	const element = document.getElementById("more");
	element.innerHTML = "First published in March 10, 2015 <br> Language: English <br> Literary Awards: Booker Prize Nominess (2015),  Dayton Literary Peace Prize Nominee for Fiction (2016),  National Book Award Finalist for Fiction (2015)";
}

function backHome() {
	window.location.href ="formative.html";
}

//choosing a cover, taking a quantity value, and multiplication 
var coverEl = document.querySelector("#cover");
var quantityEl = document.querySelector("#quantity");
var subtotalEl = document.querySelector("#subtotal");

coverEl.addEventListener("change",calculateTotal);
quantityEl.addEventListener("change",calculateTotal);

var cover_price = {};
cover_price["Hardcover"] = 20 ; 
cover_price["Paperback"] = 12 ;
cover_price["Kindle edition"] = 6 ;
cover_price["Audiobook"] = 2 ;

function calculateTotal() {
	var unitCost = cover_price[coverEl.value];
	var quantity = quantityEl.value || 0 ; 

	subtotalEl.textContent = ` $${(unitCost * quantity)}`;
}
     
// Rating 
//Citation: Look at alittlelife.html
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewNew = document.getElementById("review");
const submitButton = document.getElementById("submit");
const reviewsPast = document.getElementById("reviews");

stars.forEach((star) => {
	star.addEventListener("click",() => {
		const numofstars = parseInt(star.getAttribute("data-value"));
		rating.innerText = numofstars;
		stars.forEach((s, index) => {
			//Adding class to each star based on the selected star's value
			if (index < numofstars) {
				s.classList.add(getStarColorClass(numofstars));
			}
		});
		//Adding "selected" class to the clicked star
		star.classList.add("selected");
	});
});

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
submitButton.addEventListener("click", () => {
	const review = reviewNew.value;
	const userRating = parseInt(rating.innerText);
	//When no review is typed in
	if (!review){
		alert("Please provide a review before submitting");
        
	} else{  //present the given reviews in the empty div section 
		const reviewElement = document.createElement("div");
		reviewElement.classList.add("review");
		reviewElement.innerHTML = 
        `<strong>Rating: ${userRating}/5 </strong> Review: ${review}`;
		reviewsPast.appendChild(reviewElement);
	}
});
    
