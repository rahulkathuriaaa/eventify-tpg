import { ethers } from "ethers";
import { GelatoRelay } from "@gelatonetwork/relay-sdk";
import { contractAddress, contractAbi } from "./config";

const gelatoAPI = `mcCjkqqeo6JKZiTPs6Yc3940akAVAIIcGgXERLRRdFg_`;
const infuraApi = `eec39d04a1064883bf94ec917264ce9a`;

export let currentUserAddr = "";

export async function connectWallet() {
    if (typeof window !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const user = await signer.getAddress();
        currentUserAddr = user;
        console.log("connected")
        // console.log("userAddress: " , currentUserAddr)
        return true;
    }
}

export async function getSignerOrProvider(needSinger) {
    if (typeof window !== "undefined") {
        if (needSinger === true) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            return signer;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        return provider;
    }
}

export async function checkIfMinted() {
    const provider = await getSignerOrProvider();

    const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider
    );

    contract.on("Minted", (_to, _tokenId) => {
        let transferEvent = {
            address: _to,
            tokenId: _tokenId,
        };
        console.log(JSON.stringify(transferEvent));
        console.log("currentUserAddr: ", currentUserAddr);
    });

    return contract;
}

export async function setWOperator(userAddress) {
    const relay = new GelatoRelay();
    const apiKey = gelatoAPI;

    // userAddress = `0x248F5db296Ae4D318816e72c25c93e620341f621`

    const contractAddr = contractAddress;
    const abi = contractAbi;

    const signer = await getSignerOrProvider(true);
    const provider = await getSignerOrProvider();
    const user = currentUserAddr;

    const contract = new ethers.Contract(contractAddr, abi, signer);
    const { data } = await contract.populateTransaction.setWOperator(
        userAddress
    );

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

export async function whitelistUser(userAddress) {
    const relay = new GelatoRelay();
    const apiKey = gelatoAPI;

    // userAddress = `0x248F5db296Ae4D318816e72c25c93e620341f621`

    if (typeof window !== "undefined") {
        
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            // return signer;
        

    const contractAddr = contractAddress;
    const abi = contractAbi;

    // const signer = await getSignerOrProvider(true);
    // const provider = await getSignerOrProvider();
    const user = currentUserAddr;

    const contract = new ethers.Contract(contractAddr, abi, signer);
    const { data } = await contract.populateTransaction.whitelistUser(
        userAddress
    );

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

export async function checkIfWhitelisted() {
    const provider = await getSignerOrProvider();
    const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider
    );
    console.log("current user", currentUserAddr)
    const tx = await contract.isWhitelisted(currentUserAddr);
    console.log(tx)
    return tx
}

export async function mintNFT() {
    const relay = new GelatoRelay();
    const apiKey = gelatoAPI;

    // userAddress = `0x248F5db296Ae4D318816e72c25c93e620341f621`

    const contractAddr = contractAddress;
    const abi = contractAbi;

    const signer = await getSignerOrProvider(true);
    const provider = await getSignerOrProvider();
    const user = currentUserAddr;

    const contract = new ethers.Contract(contractAddr, abi, signer);
    const { data } = await contract.populateTransaction.mintNFT();

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

export async function receiveEvent() {
    const provider = new ethers.providers.WebSocketProvider(
        `https://polygon-mumbai.infura.io/v3/${infuraApi}`
    );

    const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider
    );

    contract.on("Minted", (_to, _tokenId) => {
        let transferEvent = {
            address: _to,
            tokenId: _tokenId,
        };
        console.log(JSON.stringify(transferEvent));
    });
}
