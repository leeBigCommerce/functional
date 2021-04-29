type Name = string;
type Quantity = number;

export type Order = {
  readonly name: Name;
  readonly quantity: Quantity;
};

type Create = (name: string, quantity: number) => Order;

export const create: Create = (name, quantity) => ({ name, quantity });
