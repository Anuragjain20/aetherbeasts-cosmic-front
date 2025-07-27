import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { QrCode, Wallet, Smartphone, Copy, CheckCircle } from 'lucide-react'
import { useConnect, useAccount } from 'wagmi'
import { useWallet } from '@/context/WalletContext'
import QRCode from 'qrcode'
import { toast } from 'sonner'

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

const WalletModal = ({ isOpen, onClose }: WalletModalProps) => {
  const { connectors, connect, data, error } = useConnect()
  const { isConnected } = useAccount()
  const { showQRCode, setShowQRCode, selectedWallet, setSelectedWallet } = useWallet()
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')
  const [walletConnectUri, setWalletConnectUri] = useState<string>('')
  const [isCopied, setIsCopied] = useState(false)

  // Close modal when wallet connects successfully
  useEffect(() => {
    if (isConnected) {
      onClose()
      setShowQRCode(false)
      setSelectedWallet(null)
      toast.success('Wallet connected successfully!')
    }
  }, [isConnected, onClose, setShowQRCode, setSelectedWallet])

  // Generate QR code when showing QR view
  useEffect(() => {
    if (showQRCode && selectedWallet === 'walletConnect') {
      // Get WalletConnect URI from the connection data
      const uri = (data as any)?.uri || ''
      if (uri) {
        setWalletConnectUri(uri)
        QRCode.toDataURL(uri, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        }).then(setQrCodeUrl)
      }
    }
  }, [showQRCode, selectedWallet, data])

  const handleWalletConnect = (connector: any) => {
    if (connector.id === 'walletConnect') {
      setSelectedWallet('walletConnect')
      setShowQRCode(true)
    } else {
      setSelectedWallet(connector.id)
      setShowQRCode(false)
    }
    connect({ connector })
  }

  const copyToClipboard = async () => {
    if (walletConnectUri) {
      await navigator.clipboard.writeText(walletConnectUri)
      setIsCopied(true)
      toast.success('URI copied to clipboard!')
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  const getWalletIcon = (connectorId: string) => {
    switch (connectorId) {
      case 'metaMask':
        return '🦊'
      case 'walletConnect':
        return '🔗'
      case 'coinbaseWallet':
        return '🔵'
      default:
        return '👛'
    }
  }

  const getWalletName = (connectorId: string) => {
    switch (connectorId) {
      case 'metaMask':
        return 'MetaMask'
      case 'walletConnect':
        return 'WalletConnect'
      case 'coinbaseWallet':
        return 'Coinbase Wallet'
      default:
        return connectorId
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {showQRCode ? (
              <>
                <QrCode className="h-5 w-5" />
                Scan QR Code
              </>
            ) : (
              <>
                <Wallet className="h-5 w-5" />
                Connect Wallet
              </>
            )}
          </DialogTitle>
        </DialogHeader>

        {showQRCode ? (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Scan this QR code with your mobile wallet app
              </p>
              
              {qrCodeUrl ? (
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-lg">
                    <img src={qrCodeUrl} alt="WalletConnect QR Code" className="w-64 h-64" />
                  </div>
                </div>
              ) : (
                <div className="flex justify-center mb-4">
                  <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Generating QR code...</p>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Or copy the connection URI:
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={walletConnectUri}
                    readOnly
                    className="flex-1 px-3 py-2 text-xs bg-muted rounded border text-center"
                    placeholder="Generating URI..."
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyToClipboard}
                    disabled={!walletConnectUri}
                  >
                    {isCopied ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Supported Mobile Wallets
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div>• Trust Wallet</div>
                <div>• Rainbow Wallet</div>
                <div>• MetaMask Mobile</div>
                <div>• Coinbase Wallet</div>
                <div>• 1inch Wallet</div>
                <div>• Uniswap Wallet</div>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={() => setShowQRCode(false)}
              className="w-full"
            >
              Back to Wallets
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Choose your preferred wallet to connect to AetherBeasts
            </p>

            <div className="space-y-2">
              {connectors.map((connector) => (
                <Button
                  key={connector.id}
                  variant="outline"
                  className="w-full justify-start h-12"
                  onClick={() => handleWalletConnect(connector)}
                  disabled={!connector.ready}
                >
                  <span className="text-xl mr-3">
                    {getWalletIcon(connector.id)}
                  </span>
                  <span className="flex-1 text-left">
                    {getWalletName(connector.id)}
                  </span>
                  {connector.id === 'walletConnect' && (
                    <QrCode className="h-4 w-4 ml-2" />
                  )}
                </Button>
              ))}
            </div>

            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive">
                  {error.message}
                </p>
              </div>
            )}

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                New to crypto wallets?{' '}
                <a
                  href="https://ethereum.org/en/wallets/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default WalletModal 