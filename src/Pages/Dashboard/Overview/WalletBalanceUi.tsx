import React from "react";
import { Card,  CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

/**
 * Defines the props for the WalletBalanceUi component.
 */
interface WalletBalanceUiProps {
  balance?: number;
  loading?: boolean;
}

/**
 * Displays the user's wallet balance in a prominent, styled card.
 * @param {WalletBalanceUiProps} props - The component props.
 * @param {number} props.balance - The current wallet balance.
 * @param {boolean} props.loading - Indicates if the balance is currently loading.
 */
const WalletBalanceUi: React.FC<WalletBalanceUiProps> = ({ balance, loading }) => {
  return (
    <Card className="flex items-center justify-between bg-primary text-primary-foreground p-6 rounded-2xl shadow-md">
      <div>
        <CardTitle className="text-lg font-semibold text-primary-foreground">Wallet Balance</CardTitle>
        {loading ? (
          <p className="mt-2 text-2xl font-bold">Loading...</p>
        ) : (
          <p className="mt-2 text-3xl font-bold">
            ${balance?.toFixed(2) ?? "0.00"}
          </p>
        )}
      </div>
      <Wallet size={48} />
    </Card>
  );
};

export default WalletBalanceUi;
