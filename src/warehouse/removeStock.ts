import { Stock } from "../stock";

import { Warehouse } from "./create";

type Name = string;
type Quantity = number;

type RequestForStock = {
  readonly name: Name;
  readonly quantity: Quantity;
};

type OptionalStock = Stock | undefined;

type RemoveStock = (
  requestForStock: RequestForStock,
  warehouse: Warehouse
) => readonly [OptionalStock, Warehouse];

export const removeStock: RemoveStock = (requestForStock, warehouse) => {
  const currentQuantity = warehouse[requestForStock.name] || 0;
  const newQuantity = currentQuantity - requestForStock.quantity;

  if (newQuantity < 0) {
    return [undefined, warehouse];
  }

  const updatedWarehouse = {
    ...warehouse,
    [requestForStock.name]: newQuantity,
  };

  const withdrawnStock = {
    name: requestForStock.name,
    quantity: requestForStock.quantity,
  };

  return [withdrawnStock, updatedWarehouse];
};
