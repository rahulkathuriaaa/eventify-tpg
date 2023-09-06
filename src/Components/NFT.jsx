import React, { useEffect, useState } from "react";
import {
    mintNFT,
    currentUserAddr,
    checkIfWhitelisted,
    connectWallet,
} from "../utils";

import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../config";

const NFT = () => {
    const [loading, setLoading] = useState(false);
    const [isWhitelisted, setIsWhitelisted] = useState(null);
    const [isWallet, setIsWallet] = useState(false)

    useEffect(() => {

    }, [])

    async function connectWalletCall() {
      await connectWallet()
      await checkIfWhitelistedCall()
    }

    async function checkIfWhitelistedCall() {
      const isWhitelisted = await checkIfWhitelisted();
      if (isWhitelisted === true) {
        setIsWhitelisted(true);
      }
      else {
        setIsWhitelisted(false)
      }
    }

    async function mintNFTCall() {
        setLoading(true);
        await mintNFT();
        // setLoading(false)
        // success animation
    }

    function NotWhitelisted() {
      return(
        <div className="text-white">You are not whitelisted</div>
      ) 
    }

    function ClaimButton() {
      if (!isWhitelisted) {
        return(
          <NotWhitelisted />
        )
      }
        return (
            <button
                onClick={mintNFTCall}
                className="px-[50px] py-2 bg-[#8A42D8] text-white rounded-xl no-underline font-semibold"
            >
                Claim Now
            </button>
        );
    }

    function ConnectButton() {
        return (
            <button
                onClick={connectWalletCall}
                className="px-[50px] py-2 bg-[#8A42D8] text-white rounded-xl no-underline font-semibold"
            >
                Connect Wallet
            </button>
        );
    }

    return (
        <div>
            <div>
                <h1 className="feature-h1">Congratulations 🥳</h1>
            </div>
            <div className="gradient-03 z-0" />

            <div className="container">
                <div className="card">
                    <div className="blue-glassmorphism z-0" />
                    <div className="content">
                        <img src="/nft.png" alt="" />
                        <div className="pink__gradient z-0" />
                        {/* <h2>Winner</h2> */}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {currentUserAddr == "" ? <ConnectButton /> : <ClaimButton />}
            </div>
        </div>
    );
};

export default NFT;
