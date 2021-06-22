import BookContextProvider from "./Context/BookContext";
import NavBar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookFrom";
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
