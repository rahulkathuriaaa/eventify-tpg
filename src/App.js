import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
// import bg from "./Assets/background.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='gradient-04 z-0' />
      {/* <img src={bg} alt="" className='bg'/> */}
      <Hero />
    </div>
  );
}

export default App;
