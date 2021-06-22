import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Karma", author: "Sadguru", id: 1 },
    { title: "Alchemist", author: "Poal kolae", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.childer}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
