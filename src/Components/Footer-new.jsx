import React from 'react'

const FooterNew = () => {
  return (
    <footer className="text-gray-400 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
       <img src="/logo.png" className="w-25 h-8" alt="" />
        {/* <img className="ml-3 text-xl" src="/logo.png"></img> */}
      </a>
      <p className="text-md text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">Seamless granular events hosting with NFT tickets.

        {/* <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer"> NFT tickets.</a> */}
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href="/" className="text-gray-400">

        </a>
        <a className="ml-3 text-gray-400" href="https://twitter.com/EventifyX">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        
      </span>
    </div>
  </footer>
  )
}

export default FooterNew;
