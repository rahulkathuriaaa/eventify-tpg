import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Clients from './Components/Clients';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='gradient-05 z-0' />
      <Hero />
      <div className='gradient-06 z-0'/>
      <Clients />
    </div>
  );
}

export default App;
