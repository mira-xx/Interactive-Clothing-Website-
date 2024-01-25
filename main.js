/* eslint-disable no-unused-vars */
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
 * Redirects to the different pages by clicking 
 * @function Link
 */
function Link() {
	window.location.href ="alittlelife.html";
}
function Link2() {
	window.location.href = "babel.html";
}
function Link3() {
	window.location.href = "rouge.html";
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

//Javascript for the Search bar 
/** A template element that contains the HTML structure for displaying book information */
const bookInfoTemplate = document.querySelector("[data-book-template]");
/** A container element that holds the book information elements */
const bookInfoContainer = document.querySelector("[data-book-info-container]");
/** An input element that allows the user to search for books by title or author */
const searchInput = document.querySelector("[data-search]");

/** An array that sores book objects */
let books = [];

/**
 * An event listener that filters the books array based on the input value
 * @param {Event} e The event object
 * @param {string} e.target.value The lowercased input value
 */
searchInput.addEventListener("input", e => {
	const value = e.target.value.toLowerCase();
	if (value === "") {
		books.forEach(book => {
			book.element.classList.add("hide");
		});
	} else {
		books.forEach(book => {
			/**
			 * A boolean value that indicates whether the book matches the input value by title or authors
			 * @type {boolean}
			 */
			const isVisible = book.title.toLowerCase().includes(value) || book.authors.toLowerCase().includes(value);
			if (isVisible) {
				book.element.classList.remove("hide");
			} else {
				book.element.classList.add("hide");
			}
		});
	}
});

/** Fetch the book data from JSON file and create book elements */
fetch("data.json")
	.then(res => res.json() )
	.then(data => {
		/** Anarray of book objects with title, authors and element properties
		 * @type {Array<{title: string, authors: string, element: Element}>}
		 */
		books = data.map(book =>{
			/** A card element that displays the book information
			 * @type {HTMLElement}
			 */
			const card = bookInfoTemplate.content.cloneNode(true).children[0]; 
			card.classList.add("hide");
			/** A header element that shows the book title
			 * @type {HTMLElement}
			 */
			const header = card.querySelector("[data-header]");
			/** A body element that shows the book authors
			 * @type {HTMLElement}
			 */
			const body = card.querySelector("[data-body]");
			card.dataset.title = book.title;
			header.textContent = book.title;
			body.textContent = book.authors;
			bookInfoContainer.appendChild(card);
			return {title: book.title, authors: book.authors, element: card};
		});
	});
