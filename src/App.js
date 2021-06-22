import BookContextProvider from "./Context/BookContext";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
      </BookContextProvider>
    </div>
  );
}

export default App;
