import { Stock } from "../stock";

type Name = string;
type Quantity = number;

type Warehouse = Record<Name, Quantity>;

type AddStock = (warehouse: Warehouse, incomingStock: Stock) => Warehouse;

export const addStock: AddStock = (warehouse, incomingStock) => {
  const currentQuantity = warehouse[incomingStock.name] || 0;
  const newQuantity = currentQuantity + incomingStock.quantity;
  const updatedWarehouse = {
    ...warehouse,
    [incomingStock.name]: newQuantity,
  };

  return updatedWarehouse;
};
