import React,{ useState } from 'react'
import Popup from '../Components/Modal';
import SideBar from '../Components/SideBar';
import Clients from '../Components/Clients';
import ConnectWallet from '../Components/ConnectWallet';




const Claim = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const closePopup = () => {
        setIsPopupOpen(false);
      };
    const openPopup = () => {
        setIsPopupOpen(true);
    }

  return (

    <div className='flex'>
    <SideBar/>
    <div className='left '>
      <ConnectWallet/>
    </div>
     </div>


  )
}

export default Claim
