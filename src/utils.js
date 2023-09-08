import { ethers } from "ethers";
import { GelatoRelay } from "@gelatonetwork/relay-sdk";
// import { PolygonMumbaiAddress, PolygonAddress, contractAbi } from "./config";
import { contractAddress, contractAbi } from "./config";

const gelatoAPI = `yB75oxiGBmWfc_Hwr7fa1Ep7Jign8v47arHy_KnCJ9k_`;
// const infuraApi = `eec39d04a1064883bf94ec917264ce9a`;

console.log("contract", contractAddress)
export let currentUserAddr = "";
// export let contractAddress = "";

// export const setCurrentContract = async () => {
//     if (window.ethereum) {
//         const chainId = await window.ethereum.request({
//             method: "eth_chainId",
//         });

//         if (chainId === 80001 || 0x13881) {
//             contractAddress = PolygonMumbaiAddress;
//             console.log("chain configured: ", chainId);
//         } else if (chainId === 137 || 0x89) {
//             contractAddress = PolygonAddress;
//             console.log("chain configured: ", chainId);
//         }
//         console.log(contractAddress)
//     }
// }

export async function connectWallet(withSign) {
    if (typeof window !== "undefined") {
        if (withSign === true) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const user = await signer.getAddress();
            currentUserAddr = user;
            console.log("connected");
            // console.log("userAddress: " , currentUserAddr)
            return true;
        } else {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const user = await provider.send("eth_requestAccounts", []);
            currentUserAddr = user[0];
            console.log("connected");
        }
    }
}

export async function getSignerOrProvider(needSinger) {
    if (typeof window !== "undefined") {
        if (needSinger === true) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const user = await signer.getAddress();
            currentUserAddr = user;
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

export async function setOperator(userAddress) {
    const relay = new GelatoRelay();
    const apiKey = gelatoAPI;

    // userAddress = `0x248F5db296Ae4D318816e72c25c93e620341f621`

    const contractAddr = contractAddress;
    const abi = contractAbi;

    const provider = await getSignerOrProvider();
    const signer = await getSignerOrProvider(true);
    const user = currentUserAddr;

    const contract = new ethers.Contract(contractAddr, abi, signer);
    const { data } = await contract.populateTransaction.setOperator(
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

    // if (typeof window !== "undefined") {

    //         const provider = new ethers.providers.Web3Provider(window.ethereum);
    //         const signer = provider.getSigner();
    //         // return signer;

    const signer = await getSignerOrProvider(true);
    const provider = await getSignerOrProvider();
    const contractAddr = contractAddress;
    const abi = contractAbi;

    // const signer = await getSignerOrProvider(true);
    // const provider = await getSignerOrProvider();
    const user = currentUserAddr;
    console.log("address", currentUserAddr);

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
    // }
}

export async function updateURI(uri) {
    const relay = new GelatoRelay();
    const apiKey = gelatoAPI;

    // userAddress = `0x248F5db296Ae4D318816e72c25c93e620341f621`

    const contractAddr = contractAddress;
    const abi = contractAbi;

    const signer = await getSignerOrProvider(true);
    const provider = await getSignerOrProvider();
    const user = currentUserAddr;

    const contract = new ethers.Contract(contractAddr, abi, signer);
    const { data } = await contract.populateTransaction.updateURI(uri);

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

export async function checkIfWhitelisted() {
    const provider = await getSignerOrProvider();
    const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider
    );
    console.log("current user", currentUserAddr);
    const tx = await contract.isWhitelisted(currentUserAddr);
    console.log(tx);
    return tx;
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
    const { data } = await contract.populateTransaction.mintNFT(user);

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
