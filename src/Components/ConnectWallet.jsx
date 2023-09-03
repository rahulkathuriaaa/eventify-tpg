import React from 'react'
import { Link } from 'react-router-dom'
const ConnectWallet = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <Link to='/prize' className="bg-[#8A42D8] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
      Connect Wallet
    </Link>

  </div>

  )
}

export default ConnectWallet
