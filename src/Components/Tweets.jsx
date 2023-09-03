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
     <Tweet id="1686824395770298369" />
     <Tweet id="1687011479307059200" />
     
     <Tweet id="1659272970903355392" />
     <Tweet id="1696475381623308502" />
     <Tweet id="1645157312024420354" />
     <Tweet id="1665031225197690880" />
    

     {/* <Tweet id="1680924487032659969" /> */}

   </div>
    </div>


  )
}

export default Tweets
