import { Stock } from "../stock";
import { addStock } from "./addStock";
import { removeStock } from "./removeStock";
import { Order } from "../order";
import { getStockQuantity } from "./getStockQuantity";

type Name = string;
type Quantity = number;

export type Warehouse = Record<Name, Quantity>;

type BoundAddStock = (stock: Stock) => WarehouseMethods;
type BoundRemoveStock = (
  order: Order
) => readonly [WarehouseMethods, Stock | undefined];
type BoundGetStockQuantity = (name: string) => number;

type WarehouseMethods = {
  readonly addStock: BoundAddStock;
  readonly removeStock: BoundRemoveStock;
  readonly getStockQuantity: BoundGetStockQuantity;
};

const createWareHouseMethods = (thisWarehouse: Warehouse): WarehouseMethods => {
  return {
    addStock: (newStock: Stock) => {
      const newWarehouse = addStock(thisWarehouse, newStock);

      return createWareHouseMethods(newWarehouse);
    },
    removeStock: (order: Order) => {
      const [newWarehouse, stock] = removeStock(thisWarehouse, order);

      return [createWareHouseMethods(newWarehouse), stock];
    },
    getStockQuantity: (name: string) => {
      return getStockQuantity(thisWarehouse, name);
    },
  };
};

type Create = (incomingStock: Stock) => WarehouseMethods;

export const create: Create = (incomingStock) =>
  createWareHouseMethods(addStock({}, incomingStock));
