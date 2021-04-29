import { Stock } from "../stock";
import { Order } from "../order";

import { Warehouse } from "./create";

type OptionalStock = Stock | undefined;

type RemoveStock = (
  warehouse: Warehouse,
  requestForStock: Order
) => readonly [Warehouse, OptionalStock];

export const removeStock: RemoveStock = (warehouse, requestForStock) => {
  const currentQuantity = warehouse[requestForStock.name] || 0;
  const newQuantity = currentQuantity - requestForStock.quantity;

  if (newQuantity < 0) {
    return [warehouse, undefined];
  }

  const updatedWarehouse = {
    ...warehouse,
    [requestForStock.name]: newQuantity,
  };

  const withdrawnStock = {
    name: requestForStock.name,
    quantity: requestForStock.quantity,
  };

  return [updatedWarehouse, withdrawnStock];
};
