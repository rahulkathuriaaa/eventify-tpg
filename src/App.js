// import './App.css';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import Clients from './Components/Clients';
// import Features from './Components/Features';
// // import Services from './Components/Services';
// import Community from './Components/Community';
// import Footer from './Components/Footer';


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className='gradient-05 z-0' />
//       <Hero />
//       <div className='gradient-06 z-0'/>
//       <Clients />
//       <Features />
//       {/* <Services /> */}
//       <Community />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Claim from './Pages/Claim'
import Whitelist from './Pages/Whitelist'
import Prize from './Pages/Prize'
const App = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path ='/claim' element={<Claim/>} />
          <Route exact path ='/whitelist' element={<Whitelist/>} />
          <Route exact path ='/prize' element={<Prize/>}/>

        </Routes>
      </Main>
    </div>
  )
}

export default App
