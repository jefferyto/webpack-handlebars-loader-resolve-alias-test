var bookListingTemplate = require("./book-listing.handlebars");

document.addEventListener("DOMContentLoaded", function() {
	var div = document.createElement('div');
	div.innerHTML = bookListingTemplate({
		username: "test",
		books: [
			{ title: "A book" },
			{ title: "Another book" },
			{ title: "Book without synopsis" }
		]
	});
	document.body.appendChild(div);
});
