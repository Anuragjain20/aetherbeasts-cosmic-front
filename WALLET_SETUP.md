# Wallet Connection Setup Guide

## Quick Start

Your wallet connection functionality is now fully implemented! Here's what you need to do to get it working:

## 1. Get a WalletConnect Project ID

1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Sign up or log in
3. Create a new project
4. Copy your Project ID

## 2. Environment Configuration

Create a `.env` file in the `aetherbeasts-cosmic-front` directory:

```bash
# WalletConnect Configuration
VITE_WALLETCONNECT_PROJECT_ID=your-actual-project-id-here
```

Replace `your-actual-project-id-here` with the Project ID from step 1.

## 3. Features Included

### ✅ Desktop Wallet Support
- **MetaMask** - Browser extension wallet
- **Coinbase Wallet** - Browser extension and mobile
- **WalletConnect** - Universal protocol for mobile wallets

### ✅ Mobile Wallet Support via QR Code
- **Trust Wallet**
- **Rainbow Wallet** 
- **MetaMask Mobile**
- **Coinbase Wallet Mobile**
- **1inch Wallet**
- **Uniswap Wallet**
- **Any WalletConnect-compatible wallet**

### ✅ QR Code Features
- Auto-generated QR codes for mobile wallet connections
- Copy-to-clipboard functionality for connection URIs
- Deep linking support for mobile wallets
- Responsive QR code display

### ✅ Supported Networks
- Ethereum Mainnet
- Sepolia (Testnet)
- Polygon
- Base

## 4. How It Works

### Connection Flow
1. User clicks "Connect Wallet"
2. Modal opens with wallet options
3. For WalletConnect:
   - QR code is automatically generated
   - User scans with mobile wallet
   - Connection is established
4. For browser wallets (MetaMask, Coinbase):
   - Direct connection prompt
   - User approves in wallet extension

### User Experience
- **Connected State**: Shows truncated wallet address with dropdown
- **Disconnect Option**: Easy disconnect from dropdown menu
- **Mobile Responsive**: Works perfectly on all screen sizes
- **Error Handling**: Clear error messages for connection issues

## 5. Testing

1. Make sure your `.env` file is configured
2. Start the development server: `npm run dev`
3. Open the application
4. Click "Connect Wallet" in the navigation
5. Test different wallet connections:
   - Try MetaMask (if installed)
   - Try WalletConnect QR code with a mobile wallet
   - Try Coinbase Wallet

## 6. Production Deployment

Before deploying to production:

1. ✅ Set up your WalletConnect project ID in production environment
2. ✅ Consider adding custom RPC endpoints for better reliability
3. ✅ Test all wallet connections thoroughly
4. ✅ Ensure HTTPS is enabled (required for wallet connections)

## 7. Customization

### Adding More Networks
Edit `src/lib/wagmi.ts` and add chains from `wagmi/chains`:

```typescript
import { arbitrum, optimism } from 'wagmi/chains'

// Add to chains array
chains: [mainnet, sepolia, polygon, base, arbitrum, optimism]

// Add to transports
transports: {
  // ... existing
  [arbitrum.id]: http(),
  [optimism.id]: http(),
}
```

### Adding More Wallets
Add connectors in `src/lib/wagmi.ts`:

```typescript
import { injected } from 'wagmi/connectors'

// Add to connectors array
connectors: [
  // ... existing
  injected({ target: 'trust' }), // Trust Wallet
]
```

## 8. Troubleshooting

### Common Issues

**"Invalid Project ID" Error:**
- Ensure your WalletConnect Project ID is correct
- Check that the `.env` file is in the right location
- Restart the development server after adding the Project ID

**QR Code Not Generating:**
- Check browser console for errors
- Ensure WalletConnect Project ID is valid
- Try refreshing the page

**Wallet Not Connecting:**
- Ensure wallet is installed and unlocked
- Check that you're on a supported network
- Try clearing browser cache and cookies

**Mobile Wallet Issues:**
- Ensure mobile wallet supports WalletConnect v2
- Try copying the URI and pasting it directly in the wallet
- Make sure your development server is accessible from mobile device

## 9. Security Notes

- Never commit your actual Project ID to version control
- Use environment variables for all sensitive configuration
- Always use HTTPS in production
- Consider implementing connection timeout handling
- Add rate limiting for connection attempts if needed

---

Your wallet connection system is now ready! The implementation follows Web3 best practices and provides excellent user experience across all devices. 🚀 