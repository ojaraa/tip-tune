import { useState } from 'react';
import Card  from '../common/Card';
import { Copy, Check, QrCode } from 'lucide-react';
import Button  from '../common/Button';

interface WalletDisplayProps {
  walletAddress: string;
  isLoading?: boolean;
}

// Simple QR code component placeholder - will use qrcode.react when installed
// For now, creates a visual pattern that resembles a QR code
const QRCodePlaceholder = ({ value }: { value: string }) => {
  // Generate a simple pattern based on the address
  const pattern = Array.from({ length: 25 }, (_, i) => {
    const hash = value.charCodeAt(i % value.length);
    return (hash + i) % 3 === 0;
  });

  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white p-2 sm:p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 relative">
      <div className="grid grid-cols-5 gap-0.5 sm:gap-1 h-full">
        {pattern.map((filled, i) => (
          <div
            key={i}
            className={`${filled ? 'bg-gray-900' : 'bg-gray-100'} rounded-sm`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <QrCode className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-300 opacity-50" />
      </div>
    </div>
  );
};

export const WalletDisplay = ({ walletAddress, isLoading = false }: WalletDisplayProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
          <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Wallet Address
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your Stellar wallet address for receiving tips
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        <div className="flex-1 min-w-0">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Address
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="text"
              value={walletAddress}
              readOnly
              className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-xs sm:text-sm truncate"
            />
            <Button
              onClick={handleCopy}
              variant="outline"
              size="sm"
              className="flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </Button>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Share this address with supporters to receive tips
          </p>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            QR Code
          </label>
          <div className="relative">
            <QRCodePlaceholder value={walletAddress} />
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
            Scan to send tips
          </p>
        </div>
      </div>
    </Card>
  );
};
