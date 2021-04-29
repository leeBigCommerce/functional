
import { create as creatStock } from './stock';
import { create as createWarehouse, removeStock } from './warehouse';
import { create as createOrder } from './order';

const cokeStock = creatStock('Coke', 22);
const warehouse = createWarehouse(cokeStock);

// eslint-disable-next-line functional/no-expression-statement
console.log('Our initially stocked warehouse:', warehouse);

const orderForCoke = createOrder('Coke', 18);

// eslint-disable-next-line functional/no-expression-statement
console.log('Recieves an order for coke', orderForCoke);

const [updatedWarehouse, withdrawnStock] = removeStock(warehouse, orderForCoke);

// eslint-disable-next-line functional/no-expression-statement
console.log('Our warehouse becomes:', updatedWarehouse, 'With stock removed:', withdrawnStock);

const orderForEvenMoreCoke = createOrder('Coke', 6);

// eslint-disable-next-line functional/no-expression-statement
console.log('Our newly updated warehouse receives another order for coke', orderForEvenMoreCoke);

const [possiblyUpdatedWarehouse, moreWithdrawnStock] = removeStock(updatedWarehouse, orderForEvenMoreCoke);

// eslint-disable-next-line functional/no-expression-statement
console.log('Our warehouse becomes:', possiblyUpdatedWarehouse, 'With stock removed:', moreWithdrawnStock);
