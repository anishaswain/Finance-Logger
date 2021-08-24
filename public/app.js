import Invoice from './classes/invoice.js';
import Payments from './classes/payments.js';
import ListTemplate from './classes/listTemplate.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//amount is HTML Input now, to convert it to number,
// we need to use amount.valueAsNumber
const resultUL = document.querySelector("ul");
const newList = new ListTemplate(resultUL);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let transaction;
    if (type.value === "invoice") {
        transaction = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        transaction = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    newList.render(transaction, type.value, "end");
});
