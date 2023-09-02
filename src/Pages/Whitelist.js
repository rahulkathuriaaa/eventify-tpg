import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Whitelist = () => {
  return (
    <div>
      <Navbar/>
        <div className='text-white h-[100vh] p-12 mx-auto'>
        <div >
                    <div className="text-2xl font-bold text-white leading-tight text-center mx-auto">
                        Whitelist Winners
                    </div>
                    <div className="py-10">
                        <div className="mb-5 text-center">
                          



                          

                           
                        </div>

                        <div className="mb-5">
                            <label
                                for="email"
                                className="font-bold mb-1 text-white block " 
                            >
                                Metamask Wallet Address
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium px-10"
                                placeholder="Enter your wallet address"
                                
                                
                            />
                        </div>
                        <div className="flex justify-center">
                                    <button
                                            className="w-42 mt-2 focus:outline-none border border-transparent py-2 px-8 rounded-lg shadow-sm text-center text-white ml-5 bg-[#8A42D8] hover:bg-blue-600 font-semibold"
                                    >
                                        Whitelist
                                    </button>
                                    </div>
                        </div>
                        </div>
            </div>
      <Footer/>
    </div>
  )
}

export default Whitelist
