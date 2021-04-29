import { Stock } from "../stock";
import { getStockQuantity } from './getStockQuantity';

type Name = string;
type Quantity = number;

type Warehouse = Record<Name, Quantity>;

type AddStock = (warehouse: Warehouse, incomingStock: Stock) => Warehouse;

export const addStock: AddStock = (warehouse, incomingStock) => {
  const currentQuantity = getStockQuantity(warehouse, incomingStock.name);
  const newQuantity = currentQuantity + incomingStock.quantity;
  const updatedWarehouse = {
    ...warehouse,
    [incomingStock.name]: newQuantity,
  };

  return updatedWarehouse;
};
