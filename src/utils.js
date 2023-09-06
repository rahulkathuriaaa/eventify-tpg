import { ethers } from "ethers";
import { GelatoRelay } from "@gelatonetwork/relay-sdk";
import { contractAddress, contractAbi } from "./config";

const gelatoAPI = `fX8HZi4kUzCCMm7_FE_4LZXkqfC6ttDyuKd1YRXIDdo_`


export async function setWOperator(userAddress) {
    const relay = new GelatoRelay();
    const apiKey = gelatoAPI

    // userAddress = `0x248F5db296Ae4D318816e72c25c93e620341f621`

    const contractAddr = contractAddress;
    const abi = contractAbi;

    if (typeof window !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const user = await signer.getAddress();

        const contract = new ethers.Contract(contractAddr, abi, signer);
        const { data } = await contract.populateTransaction.setWOperator(userAddress)

        const request = {
            chainId: (await provider.getNetwork()).chainId,
            target: contractAddr,
            data: data,
            user: user,
        };

        const relayResponse = await relay.sponsoredCallERC2771(
            request,
            provider,
            apiKey
        );
        
        console.log(relayResponse);
    }
}

export async function whitelistUser(userAddress) {
    const relay = new GelatoRelay();
    const apiKey = gelatoAPI

    // userAddress = `0x248F5db296Ae4D318816e72c25c93e620341f621`

    const contractAddr = contractAddress;
    const abi = contractAbi;

    if (typeof window !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const user = await signer.getAddress();

        const contract = new ethers.Contract(contractAddr, abi, signer);
        const { data } = await contract.populateTransaction.whitelistUser(userAddress)

        const request = {
            chainId: (await provider.getNetwork()).chainId,
            target: contractAddr,
            data: data,
            user: user,
        };

        const relayResponse = await relay.sponsoredCallERC2771(
            request,
            provider,
            apiKey
        );
        
        console.log(relayResponse);
    }
}

export async function mintNFT() {
    const relay = new GelatoRelay();
    const apiKey = gelatoAPI

    const contractAddr = contractAddress;
    const abi = contractAbi;

    if (typeof window !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const user = await signer.getAddress();

        const contract = new ethers.Contract(contractAddr, abi, signer);
        const { data } = await contract.populateTransaction.mintNFT()

        const request = {
            chainId: (await provider.getNetwork()).chainId,
            target: contractAddr,
            data: data,
            user: user,
        };

        const relayResponse = await relay.sponsoredCallERC2771(
            request,
            provider,
            apiKey
        );
        
        console.log(relayResponse);
    }
}
