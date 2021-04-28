import { Stock } from "../stock";
import { addStock } from "./addStock";

type Name = string;
type Quantity = number;

export type Warehouse = Record<Name, Quantity>;

type Create = (incomingStock: Stock) => Warehouse;

export const create: Create = (incomingStock) => addStock(incomingStock, {});
