type Book = {
  id: number;
  title: string;
  author: string;
  haveRead: boolean;
  notes?: string; // this field is optional (nullable)!
}

let nextId = 1;
let myBooks: Book[] = [];

/**
 * This function has been implemented for you! Returns all books.
 */
export const getBooks = () => {
  return myBooks;
}

/**
 * TODO: Implement the getBookById function. Should take in an id
 * and return the book with that id. If no book is found, return null.
 */
export const getBookById = (id: number) => {
}

/**
 * TODO: Implement the addBook function. Should take in fields to create
 * a book and add it to the list of books, assigning it an ID
 * automatically. Return the new book.
 */
export const addBook = (title: string, author: string, haveRead: boolean, notes?: string) => {
}

/**
 * TODO: Implement the markBookAsRead function. Should take in an id
 * and mark the book as read. Return the updated book, or null if no
 * book was found.
 */
export const markBookAsRead = (id: number) => {
}
