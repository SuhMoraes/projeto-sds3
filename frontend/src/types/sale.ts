import { Seller } from "./seller";

// Definindo um tipo
export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export type SalePage = {
  content?: Sale[]; //Opcional
  last: boolean;
  totalPages: number;
  totalElements: number;
  size?: number; //Opcional
  number: number;
  first: boolean;
  numberOfElements?: number; //Opcional
  empty?: boolean; //Opcional

}

export type SaleSum = {
  sellerName: string;
  sum: number;
}

export type SaleSucess = {
  sellerName: string;
  visited: number;
  deals: number;
}