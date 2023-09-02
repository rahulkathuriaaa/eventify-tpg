import React,{ useState } from 'react'
import Popup from '../Components/Modal';




const Claim = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const closePopup = () => {
        setIsPopupOpen(false);
      };
    const openPopup = () => {
        setIsPopupOpen(true);
    }

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
     onClick={openPopup} >
      Connect Wallet
    </button>
    <Popup isOpen={isPopupOpen} onClose={closePopup} />

  </div>

  )
}

export default Claim
