interface Auth {
  provider: string;
  providerId: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  auths: Auth[];
  is_active: "ACTIVE" | "INACTIVE"; // You can expand if more statuses exist
  role: "USER" | "ADMIN" | string;  // Expand as per your roles
  is_verified: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

interface Meta {
  total: number;
}

export interface UsersResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: Meta;
  data: User[];
}



export interface Transaction {
  _id: string;
  user: string; // user id reference
  type: "TRANSFER" | "DEPOSIT" | "WITHDRAW" | string; 
  amount: number;
  transaction_fee: number;
  status: "PENDING" | "COMPLETED" | "FAILED" | string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface TransactionResponseData {
  length: number;
  data: Transaction[];
}

export interface TransactionUiProps {
  data: Transaction[];
}
export interface TransactionApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: TransactionResponseData;
}

export interface Commission {
  _id: string;
  agent_id: string;
  amount: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface CommissionResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    data: Commission[];
  };
}

export interface WalletUiProps {
  data: Wallet[];
}
export interface Wallet {
  _id: string;
  user: string;
  balance: number;
  status: "ACTIVE" | "INACTIVE" | string; // extendable if more statuses exist
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface AllWalletApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    data: Wallet[];
  };
}


