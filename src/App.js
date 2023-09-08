import React from 'react'
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Whitelist from './Pages/Whitelist'
import Operator from './Pages/Operator'
import Prize from './Pages/Prize'


const App = () => {
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
