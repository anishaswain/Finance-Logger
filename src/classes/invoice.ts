import HasFormatter from '../interfaces/HasFormatter.js'

//class
export default class Invoice implements HasFormatter{
    //private or readonly
    // private client:string;
    // private details:string;
    // private amount:number;

    constructor(
        private client:string,
        private details:string,
        private amount:number,
    ){
        // this.client = client;
        // this.details = details;
        // this.amount = amount
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}