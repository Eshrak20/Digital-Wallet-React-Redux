import React from "react";
import { Card, CardTitle } from "@/components/ui/card";

/**
 * Defines the props for the RecentTransactionsUi component.
 */
interface Transaction {
  id: string;
  type: string;
  amount: number;
  createdAt: string;
}

/**
 * Displays a list of recent transactions.
 * @param {RecentTransactionsUiProps} props - The component props.
 * @param {Transaction[]} props.transactions - An array of transaction objects.
 * @param {boolean} props.loading - Indicates if the transactions are currently loading.
 */
const RecentTransactionsUi: React.FC<{ transactions: Transaction[]; loading?: boolean }> = ({ transactions, loading }) => {
  return (
    <Card className="p-6 rounded-2xl shadow-md">
      <CardTitle className="text-lg font-semibold mb-4">Recent Transactions</CardTitle>
      {loading ? (
        <p className="text-center text-muted-foreground">Loading...</p>
      ) : transactions.length === 0 ? (
        <p className="text-center text-muted-foreground">No recent transactions</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((txn) => (
            <li
              key={txn.id}
              className="flex justify-between items-center p-3 rounded-lg bg-muted shadow-sm"
            >
              <div>
                <p className="font-medium">{txn.type}</p>
                <p className="text-sm text-muted-foreground">{new Date(txn.createdAt).toLocaleString()}</p>
              </div>
              <div className={`font-bold ${txn.amount >= 0 ? "text-primary" : "text-destructive"}`}>
                ${txn.amount.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default RecentTransactionsUi;
