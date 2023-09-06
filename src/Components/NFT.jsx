import React from 'react'
import { mintNFT } from "../utils";

const NFT = () => {

  async function mintNFTCall() {
    await mintNFT()
    // add animation call
  }

  return (
    <div>
       <div>
          <h1 className="feature-h1">Congratulations 🥳</h1>
        </div>
        <div className='gradient-03 z-0'/>

        <div className='container'>
          <div className='card'>
            <div className='blue-glassmorphism z-0'/>
            <div className='content'>
              <img src="/nft.png" alt="" />
              <div className='pink__gradient z-0'/>
              {/* <h2>Winner</h2> */}

            </div>


          </div>

        </div>
        <div className='flex items-center justify-center'>
        <button onClick={mintNFTCall} className='px-[50px] py-2 bg-[#8A42D8] text-white rounded-xl no-underline font-semibold'>Claim Now</button>

        </div>

    </div>
  )
}

export default NFT
