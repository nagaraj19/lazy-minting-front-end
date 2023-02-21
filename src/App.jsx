import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import components from "./components/index";
import pages from "./pages/index";

import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const AlchemyApiKey = import.meta.env.ALCHEMY_API_KEY;

const { chains, provider } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: AlchemyApiKey }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Lazyminting",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <div className="App">
      <Router>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            coolMode
            theme={darkTheme({
              accentColor: "#2196f3",
              accentColorForeground: "white",
            })}
          >
            <components.Navbar />
            <Routes>
              <Route path="/" element={<pages.Home />} />
              <Route path="/create" element={<pages.Create />} />
            </Routes>
            <components.Footer />
          </RainbowKitProvider>
        </WagmiConfig>
      </Router>
    </div>
  );
}

export default App;
