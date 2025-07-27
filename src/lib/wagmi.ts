import { createConfig, http } from 'wagmi'
import { mainnet, sepolia, polygon, base } from 'wagmi/chains'
import { walletConnect, metaMask, coinbaseWallet } from 'wagmi/connectors'

// You'll need to get this from https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'your-project-id-here'

export const config = createConfig({
  chains: [mainnet, sepolia, polygon, base],
  connectors: [
    metaMask(),
    walletConnect({ 
      projectId,
      metadata: {
        name: 'AetherBeasts',
        description: 'Cosmic NFT Collection',
        url: 'https://aetherbeasts.com',
        icons: ['https://aetherbeasts.com/favicon.ico']
      }
    }),
    coinbaseWallet({
      appName: 'AetherBeasts',
      appLogoUrl: 'https://aetherbeasts.com/favicon.ico'
    })
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
} 