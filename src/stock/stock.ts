type Name = string;
type Quantity = number;

export type Stock = {
  readonly name: Name;
  readonly quantity: Quantity;
};

type Create = (name: string, quantity: number) => Stock;

export const create: Create = (name, quantity) => ({
  name,
  quantity,
});
