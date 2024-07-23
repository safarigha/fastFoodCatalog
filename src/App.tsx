import "./App.css";
import CategoryList from "./categoryList/CategoryList";
import Header from "./header/Header";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryList />
    </div>
  );
}

export default App;
