# Google Analytics Setup Guide

This guide will help you set up Google Analytics 4 (GA4) for your AetherBeasts application.

## Prerequisites

1. A Google Analytics 4 property
2. Your GA4 Measurement ID (starts with "G-")

## Installation

1. Install the required dependency:
```bash
npm install react-ga4
```

## Configuration

1. Create a `.env.local` file in your project root:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

## Features Implemented

### Automatic Tracking
- **Page Views**: Automatically tracks page views when users navigate between routes
- **Route Changes**: Tracks all React Router navigation

### Custom Event Tracking
- **Wallet Connections**: Tracks when users connect their wallets (MetaMask, WalletConnect, etc.)
- **Social Media Clicks**: Tracks clicks on Discord, Twitter, Instagram, and Telegram links
- **Button Interactions**: Tracks important button clicks throughout the app
- **NFT Interactions**: Ready for tracking NFT-related actions

### Tracked Events

#### Social Media
- `social_click` - When users click on social media links
  - Category: `social`
  - Labels: `discord`, `twitter`, `instagram`, `telegram`

#### Wallet
- `wallet_connected` - When users connect their wallet
  - Category: `wallet`
  - Labels: `metamask`, `walletconnect`, `coinbasewallet`

#### UI Interactions
- `button_click` - When users click important buttons
  - Category: `ui`
  - Labels: `hero_section_join_drop`, `hero_section_learn_more`, `community_section_join_discord`, etc.

## Testing

1. Start your development server:
```bash
npm run dev
```

2. Open your browser's developer tools
3. Check the console for Google Analytics initialization messages
4. Navigate through your app and check the Network tab for GA4 requests

## Verification

1. Go to your Google Analytics dashboard
2. Navigate to Reports > Realtime
3. Visit your website and perform some actions
4. You should see real-time data appearing in GA4

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_GA_MEASUREMENT_ID` | Your GA4 Measurement ID | `G-XXXXXXXXXX` |

## Troubleshooting

### Analytics not working?
1. Check that your GA4 Measurement ID is correct
2. Verify the `.env.local` file is in the project root
3. Restart your development server after adding environment variables
4. Check browser console for any error messages

### No data in GA4?
1. Ensure you're using the correct GA4 property (not Universal Analytics)
2. Check that your GA4 property is properly configured
3. Verify that data collection is enabled in your GA4 property settings

## Security Notes

- Never commit your actual GA4 Measurement ID to version control
- Use `.env.local` for local development (already in .gitignore)
- For production, set environment variables in your hosting platform

## Additional Customization

You can add more custom tracking by importing the tracking functions:

```typescript
import { trackEvent, trackNFTInteraction } from '@/lib/analytics';

// Track custom events
trackEvent('custom_action', 'custom_category', 'custom_label');

// Track NFT interactions
trackNFTInteraction('mint', 'fire_beast');
``` 