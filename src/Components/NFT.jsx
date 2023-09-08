import React, { useEffect, useState } from "react";
import {
    mintNFT,
    currentUserAddr,
    checkIfWhitelisted,
    connectWallet,
} from "../utils";
import ReactConfetti from "react-confetti";

// import { ethers } from "ethers";
// import { contractAddress, contractAbi } from "../config";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import LoadingCircle from "./LoadingCircles";

const NFT = () => {
    const [loading, setLoading] = useState(false);
    const [isWhitelisted, setIsWhitelisted] = useState(null);
    // const [isWallet, setIsWallet] = useState(false);

    //
    const [windowDimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [Btn, setBtn] = useState(false);
    const detectSize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener("resize", detectSize);
        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [windowDimension]);

    let isValue = null;

    // useEffect(() => {
    //     connectWallet();
    // }, []);

    useEffect(() => {
        if (loading === true) {
            isValue = true;
            // call loading function
        }
        if (loading === false && isValue === true) {
            // setBtn(!Btn)
        }
    }, [loading]);

    async function connectWalletCall() {
        await connectWallet();
        await checkIfWhitelistedCall();
    }

    async function checkIfWhitelistedCall() {
        const isWhitelisted = await checkIfWhitelisted();
        if (isWhitelisted === true) {
            setIsWhitelisted(true);
        } else {
            setIsWhitelisted(false);
        }
    }

    async function mintNFTCall() {
        setLoading(true);
        await mintNFT();
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);
        setBtn(!Btn);
    }

    function NotWhitelisted() {
        return (
            <div className="text-white py-2 px-10 space-x-1 mt-4 blue-glassmorphism rounded-md font-semibold">
                You are not whitelisted
            </div>
        );
    }

    function ClaimButton() {
        if (!isWhitelisted) {
            return <NotWhitelisted />;
        }
        if (loading) {
            return (
                <button
                    onClick={mintNFTCall}
                    className="px-[50px] py-2 bg-[#8A42D8] text-white rounded-xl no-underline font-semibold"
                >
                    <div className="loading-circle"></div>
                </button>
            );
        }
        return (
            <button
                onClick={mintNFTCall}
                className="px-11 py-4 bg-[#9966CC] text-white rounded-xl no-underline font-semibold mt-4"
            >
                Claim Now
                {/*  */}
            </button>
        );
    }

    function ConnectButton() {
        return (
            <button
                onClick={connectWalletCall}
                className="px-11 py-4 bg-[#9966CC] text-white rounded-xl no-underline font-semibold mt-4 hover:bg-purple-700"
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
                        <img src="/nft2.png" alt="" />
                        <div className="pink__gradient z-0" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {currentUserAddr === "" ? <ConnectButton /> : <ClaimButton />}
            </div>
            {Btn && (
                <ReactConfetti
                    width={windowDimension.width}
                    height={windowDimension.height}
                    tweenDuration={500}
                />
            )}
        </div>
    );
};

export default NFT;
