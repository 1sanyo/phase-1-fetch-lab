function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}
  return fetch("https://anapioficeandfire.com/api/books")
  .then( function (response) {
    // console.log(response);
    return response.json();
  })
  .then( function (data) {
    console.log(data);
    return renderBooks(data);
  })

function renderBooks(books) {
  };


function getTotalPages(books) {
  let totalPages = 0
  books.forEach(book => {
    totalPages += book["numberOfPages"]
  });
  console.log(`The total pages is ${totalPages}`)
  console.log(`The fifth book in this series is ${books[4]["name"]}`)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});