import HasFormatter from '../interfaces/HasFormatter.js'

//class
export default class Payments implements HasFormatter{
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
        return `${this.client} is owed ${this.amount} for ${this.details}`
    }
}