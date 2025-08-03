import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (measurementId) {
    ReactGA.initialize(measurementId);
    console.log('Google Analytics initialized with ID:', measurementId);
  } else {
    console.warn('Google Analytics Measurement ID not found in environment variables');
  }
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Track wallet connection
export const trackWalletConnection = (walletType: string) => {
  trackEvent('wallet_connected', 'wallet', walletType);
};

// Track NFT interaction
export const trackNFTInteraction = (action: string, nftType: string) => {
  trackEvent(action, 'nft', nftType);
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', 'social', platform);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', 'ui', `${location}_${buttonName}`);
}; 