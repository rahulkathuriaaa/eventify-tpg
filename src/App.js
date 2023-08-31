import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
// import bg from "./Assets/background.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='gradient-05 z-0' />
      {/* <img src={bg} alt="" className='bg'/> */}
      <Hero />
      <div className='gradient-06 z-0'/>
    </div>
  );
}

export default App;
