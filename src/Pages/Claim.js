import React from 'react'
// import { useState } from 'react';
// import Modals from '../Components/Modal';

// const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };


const Claim = () => {
  return (
    // <div className='mt-10'>
    //      <div class="glass-container">
    //     <img src="/nft.png" alt="Showcased Image" class="showcased-image"/>
    //     <h2>Showcased Image</h2>
    //     <p>This is an example of a glassmorphic container with a showcased image.</p>
    // </div>
    // </div>

    <div className="flex justify-center items-center h-screen">
    <button className="bg-[#8A42D8] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
      Connect Wallet
    </button>
    {/* <Modals isOpen={isModalOpen} onClose={handleCloseModal} /> */}

  </div>

  )
}

export default Claim
