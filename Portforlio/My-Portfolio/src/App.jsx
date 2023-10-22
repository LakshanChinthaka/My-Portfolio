import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import RoundEffect from "./Components/RoundEffect/RoundEffect";
import About from "./Components/Section/About";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#051622]">
        <Header />
        <RoundEffect />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
