import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, connectorsForWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
      polygon,
      ...(process.env.REACT_APP_ENABLE_TESTNETS === "true" ? [polygonMumbai] : []),
  ],
  [publicProvider()]
);

const projectId = `61add3dab2037eb610bc9a82af42251c`;

const { wallets } = getDefaultWallets({
    appName: "Eventify",
    projectId,
    chains,
});

// const demoAppInfo = {
//   appName: "Eventify",
// };

const connectors = connectorsForWallets([
  ...wallets,
  {
      groupName: "Other",
      wallets: [
          argentWallet({ projectId, chains }),
          trustWallet({ projectId, chains }),
          ledgerWallet({ projectId, chains }),
      ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});


// const wagmiConfig = createConfig({
//     autoConnect: true,
//     connectors,
//     publicClient,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                <App />
            </RainbowKitProvider>
        </WagmiConfig>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
