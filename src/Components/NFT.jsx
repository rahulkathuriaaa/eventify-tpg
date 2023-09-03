import React from 'react'

const NFT = () => {
  return (
    <div>
       <div>
          <h1 className="feature-h1">Congratulations 🥳</h1>
        </div>
        <div className='container'>
          <div className='card'>
            <div className='content'>
              <img src="/nft.png" alt="" />
              {/* <h2>Winner</h2> */}

            </div>


          </div>

        </div>
        <div className='flex items-center justify-center'>
        <a href="#" className='px-[50px] py-2 bg-[#8A42D8] text-white rounded-xl no-underline font-semibold'>Claim Now</a>

        </div>

    </div>
  )
}

export default NFT
