
import { create as creatStock } from './stock';
import { create as createWarehouse, removeStock } from './warehouse';

const cokeStock = creatStock('Coke', 22);
const warehouse = createWarehouse(cokeStock);

const [withdrawnStock, updatedWarehouse] = removeStock({ name: 'Coke', quantity: 18 }, warehouse);

// eslint-disable-next-line functional/no-expression-statement
console.log(withdrawnStock, updatedWarehouse);

const [moreWithdrawnStock, possiblyUpdatedWarehouse] = removeStock({ name: 'Coke', quantity: 7 }, updatedWarehouse);

// eslint-disable-next-line functional/no-expression-statement
console.log(moreWithdrawnStock, possiblyUpdatedWarehouse);
