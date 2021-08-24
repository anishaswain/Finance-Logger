import Invoice from './classes/invoice.js';
import Payments from './classes/payments.js';
import HasFormatter from './interfaces/HasFormatter.js';
import ListTemplate from './classes/listTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
//amount is HTML Input now, to convert it to number,
// we need to use amount.valueAsNumber

const resultUL = document.querySelector("ul")!
const newList = new ListTemplate(resultUL);

form.addEventListener('submit',(e:Event) => {
    e.preventDefault()
    let transaction:HasFormatter;

    if(type.value==="invoice"){
        transaction = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }
    else{
        transaction = new Payments(tofrom.value,details.value,amount.valueAsNumber)
    }  
    newList.render(transaction,type.value,"end")
}) 