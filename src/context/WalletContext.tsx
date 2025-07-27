import { createContext, useContext, useState, ReactNode } from 'react'

interface WalletContextType {
  isWalletModalOpen: boolean
  setIsWalletModalOpen: (open: boolean) => void
  showQRCode: boolean
  setShowQRCode: (show: boolean) => void
  selectedWallet: string | null
  setSelectedWallet: (wallet: string | null) => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider')
  }
  return context
}

interface WalletProviderProps {
  children: ReactNode
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)

  return (
    <WalletContext.Provider
      value={{
        isWalletModalOpen,
        setIsWalletModalOpen,
        showQRCode,
        setShowQRCode,
        selectedWallet,
        setSelectedWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
} 