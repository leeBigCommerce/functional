type Name = string;
type Quantity = number;

type Warehouse = Record<Name, Quantity>;

export const createWarehouse = (fromWarehouse: Warehouse = {}): Warehouse => ({
  ...fromWarehouse,
});

type Stock = {
  readonly name: Name;
  readonly quantity: Quantity;
};

export const addStockToWarehouse = (
  incomingStock: Stock,
  warehouse: Warehouse
): Warehouse => {
  const currentQuantity = warehouse[incomingStock.name] || 0;
  const newQuantity = currentQuantity + incomingStock.quantity;

  return {
    ...warehouse,
    [incomingStock.name]: newQuantity,
  };
};

export const removeStockFromWarehouse = (
  outgoingStock: Stock,
  warehouse: Warehouse
): readonly [Stock | undefined, Warehouse] => {
  const currentQuantity = warehouse[outgoingStock.name] || 0;
  const newQuantity = currentQuantity - outgoingStock.quantity;

  if (newQuantity < 0) {
    return [undefined, warehouse];
  }

  return [
    { name: outgoingStock.name, quantity: outgoingStock.quantity },
    {
      ...warehouse,
      [outgoingStock.name]: newQuantity,
    },
  ];
};
