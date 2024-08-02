import Dessert from "./components/Dessert";
import Footer from "./components/Footer";
import Fruits from "./components/Fruits";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Fruits />
      <Testimonials />
      <Dessert />
      <Footer />
    </div>
  );
}

export default App;
