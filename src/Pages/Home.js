import '../App.css';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero';
import Clients from '../Components/Clients';
import Features from '../Components/Features';
import Community from '../Components/Community';
import Tweets from '../Components/Tweets';
import UseCases from '../Components/UseCases';
import FooterNew from '../Components/Footer-new';


function Home() {
  return (
    <div className="App bg-[#140d1e]">
        <Navbar/>
      <div className='gradient-05 z-0' />
      <Hero />
      <div className='gradient-06 z-0'/>
      <Clients />
      <Features />
      <Tweets/>
      {/* <Services /> */}
      <br/>
      <UseCases/>
      <Community />
      {/* <Footer /> */}
      <FooterNew/>
    </div>
  );
}

export default Home;
