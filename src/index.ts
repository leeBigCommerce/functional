import { createWarehouse, addStockToWarehouse, removeStockFromWarehouse } from './warehouse';

const freshWarehouse = createWarehouse();

const stockedWarehouse = addStockToWarehouse({ name: 'Coke', quantity: 22 }, freshWarehouse);

const [withdrawnStock, updatedWarehouse] = removeStockFromWarehouse({ name: 'Coke', quantity: 18 }, stockedWarehouse);

console.log(withdrawnStock, updatedWarehouse);

const [moreWithdrawnStock, possiblyUpdatedWarehouse] = removeStockFromWarehouse({ name: 'Coke', quantity: 7 }, updatedWarehouse);

console.log(moreWithdrawnStock, possiblyUpdatedWarehouse);
