/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statement */

// Attempting to mimic tests shown in https://martinfowler.com/articles/mocksArentStubs.html

import { create as createOrder } from "./order";
import { create as createStock } from "./stock";
import { create as createWarehouse } from "./warehouse";

describe("OrderStateTester", () => {
  const TALISKER = "Talisker";
  const warehouse = createWarehouse(createStock(TALISKER, 50));

  test("testOrderIsFilledIfEnoughInWarehouse", () => {
    const [updatedWarehouse, removedTalisker] = warehouse.removeStock(
      createOrder(TALISKER, 50)
    );

    expect(updatedWarehouse.getStockQuantity(TALISKER)).toBe(0);
    expect(removedTalisker?.quantity).toBe(50);
  });

  test("testOrderDoesNotRemoveIfNotEnough", () => {
    const [updatedWarehouse, removedTalisker] = warehouse.removeStock(
      createOrder(TALISKER, 51)
    );

    expect(updatedWarehouse.getStockQuantity(TALISKER)).toBe(50);
    expect(removedTalisker).toBe(undefined);
  });
});
