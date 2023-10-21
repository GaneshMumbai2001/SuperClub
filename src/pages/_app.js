import '@/styles/globals.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { avalancheFuji } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

export default function App({ Component, pageProps }) {
  const { chains, publicClient } = configureChains(
    [ avalancheFuji],
    [
     // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'Club house',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })
  return(
  <>
   <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <Component {...pageProps}/>
      </RainbowKitProvider>
    </WagmiConfig>
  
  </>
  )
}
