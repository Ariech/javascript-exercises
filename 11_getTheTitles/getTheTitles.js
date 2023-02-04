const getTheTitles = function(books) {
    // booksTitles = [];
    // books.forEach(book => booksTitles.push(book.title))

    // return booksTitles;

    const titles = books.map(book => book.title);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
