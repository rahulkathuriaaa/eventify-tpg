import React from 'react'
import { Tweet } from 'react-tweet'

const Tweets = () => {
  return (
    <div>
                <div>
          <h1 className="feature-h1">Hear from our Community</h1>

        </div>
        
            <div className="App px-12 mx-12 sm:grid-cols-1 grid lg:grid-cols-3 gap-8" data-theme="light" >
     
     {/* <Tweet id="1659273134879514624" /> */}
     <Tweet id="1686463982092132352" />
     <Tweet id="1699796869260751101" />
     <Tweet id="1680924494225895431" />

     

    

     {/* <Tweet id="1680924487032659969" /> */}

   </div>
    </div>


  )
}

export default Tweets
