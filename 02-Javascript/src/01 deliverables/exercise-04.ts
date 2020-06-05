console.log("************** DELIVERABLE 04 *********************");

interface Book {
    title: string;
    isRead: boolean;
};

const isBookRead = (books: Book[], titleToSearch: string) => -1 !== books.findIndex((book) => book.title == titleToSearch && book.isRead);

var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  console.log("books = " + JSON.stringify(books));
  
  console.log("isBookRead(books, 'Devastación')");
  console.log(isBookRead(books, "Devastación")); // true

  console.log("isBookRead(books, 'Canción de hielo y fuego')");
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false

  console.log("isBookRead(books, 'Los Pilares de la Tierra')");
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false