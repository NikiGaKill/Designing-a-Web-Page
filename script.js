document.getElementById("search").addEventListener("input", function(event) {
    const query = event.target.value.toLowerCase();
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        const title = book.querySelector("h2").textContent.toLowerCase();
        book.style.display = title.includes(query) ? "block" : "none";
    });
});
