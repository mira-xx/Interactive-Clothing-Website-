const bookInfoTemplate = document.querySelector("[data-book-template]");
const bookInfoContainer = document.querySelector("[data-book-info-container]");
const searchInput = document.querySelector("[data-search]");

let books = [];

searchInput.addEventListener("input", e => {
	const value = e.target.value.toLowerCase();
	books.forEach(book => {
		console.log(book); //added this line
		const isVisible = book.title.toLowerCase().includes(value) || book.authors.toLowerCase().includes(value);
		book.element.style.display = isVisible ? "block": "none";
	});
});

fetch("data.json")
	.then(res => res.json() )
	.then(data => {
		books = data.map(book =>{
			const card = bookInfoTemplate.content.cloneNode(true).children[0]; 
			const header = card.querySelector("[data-header]");
			const body = card.querySelector("[data-body]");
			card.dataset.title = book.title;
			header.textContent = book.title;
			body.textContent = book.authors;
			bookInfoContainer.appendChild(card);
			return {title: book.title, authors: book.authors, element: card};
		});
	});
