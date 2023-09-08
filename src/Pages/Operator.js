import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { whitelistUser, updateURI } from "../utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import FooterNew from "../Components/Footer-new";

const Operator = () => {
    const [input, setInput] = useState(
        ""
    );

    async function whitelistUserCall() {
        await whitelistUser(input);
    }

    async function updateURICall() {
        await updateURI(input);
    }

    return (
        <div>
            <Navbar />
            <div className="text-white h-[100vh] p-12 mx-auto">
                <div>
                    <div className="text-2xl font-bold text-white leading-tight text-center mx-auto">
                        Operator's Portal
                    </div>
                    <ConnectButton
                        accountStatus="address"
                        showBalance={false}
                    />
                    {/* <ConnectButton /> */}
                    <div className="py-10">
                        <div className="mb-5 text-center"></div>

                        <div className="mb-5">
                            <label
                                for="email"
                                className="font-bold mb-1 text-white block "
                            >
                                Whitelist user address
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium px-10"
                                placeholder="Enter your wallet address"
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={whitelistUserCall}
                                className="w-42 mt-2 focus:outline-none border border-transparent py-2 px-8 rounded-lg shadow-sm text-center text-white ml-5 bg-[#8A42D8] hover:bg-blue-600 font-semibold"
                            >
                                Whitelist
                            </button>
                        </div>

                        <div className="mb-5">
                            <label
                                for="email"
                                className="font-bold mb-1 text-white block "
                            >
                                NFT URI
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium px-10"
                                placeholder="Enter your wallet address"
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={updateURICall}
                                className="w-42 mt-2 focus:outline-none border border-transparent py-2 px-8 rounded-lg shadow-sm text-center text-white ml-5 bg-[#8A42D8] hover:bg-blue-600 font-semibold"
                            >
                                Update
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <FooterNew />
        </div>
    );
};

export default Operator;
