import React, { useEffect } from 'react'
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Whitelist from './Pages/Whitelist'
import Operator from './Pages/Operator'
import Prize from './Pages/Prize'
import { setCurrentContract } from './utils'
import { ethers } from "ethers";


const App = () => {

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const { provider: ethereum } = provider;
  // ethereum.on('accountsChanged', setCurrentContract);

  // useEffect(() => {
  //   setCurrentContract()
  // }, [])

  return (
    <div>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path ='/whitelist' element={<Whitelist/>} />
          <Route exact path ='/operator' element={<Operator/>} />
          <Route exact path ='/claim' element={<Prize/>}/>
        </Routes>
      </Main>
    </div>
  )
}

export default App
