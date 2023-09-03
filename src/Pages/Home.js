import '../App.css';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero';
import Clients from '../Components/Clients';
import Features from '../Components/Features';
// import Services from './Components/Services';
import Community from '../Components/Community';
import Footer from '../Components/Footer';
import Tweets from '../Components/Tweets';
import UseCases from '../Components/UseCases';


function Home() {
  return (
    <div className="App">
        <Navbar/>
      <div className='gradient-05 z-0' />
      <Hero />
      <div className='gradient-06 z-0'/>
      <Clients />
      <Features />
      <Tweets/>
      {/* <Services /> */}
      <UseCases/>
      <Community />
      <Footer />
    </div>
  );
}

export default Home;
