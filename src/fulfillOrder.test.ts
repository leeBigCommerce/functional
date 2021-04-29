/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statement */
import { create as createOrder } from './order';
import { create as createWarehouse, removeStock } from './warehouse';
import { create as createStock } from './stock';

test("testOrderIsFilledIfEnoughInWarehouse", () => {
    const stockOfOneHundredCokes = createStock('Coke', 100);
    const warehouse = createWarehouse(stockOfOneHundredCokes);

    const orderForTwentyTwoCokes = createOrder('Coke', 22);

    const [_, coke] = removeStock(warehouse, orderForTwentyTwoCokes)

    expect(coke?.quantity).toBe(22);
});

test("testOrderDoesNotRemoveIfNotEnough", () => {
    const stockOfEightCokes = createStock('Coke', 8);
    const warehouse = createWarehouse(stockOfEightCokes);

    const orderForTwentyTwoCokes = createOrder('Coke', 22);

    const [_, coke] = removeStock(warehouse, orderForTwentyTwoCokes)

    expect(coke).toBe(undefined);
});
