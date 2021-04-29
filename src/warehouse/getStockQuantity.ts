import { Warehouse } from "./create";

type GetStockQuantity = (warehouse: Warehouse, stockName: string) => number;

export const getStockQuantity: GetStockQuantity = (warehouse, stockName) => {
  return warehouse[stockName] || 0;
};
